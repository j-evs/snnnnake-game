import * as React from 'react';
import './Grid.css';

import Square from './Square';

import { BodyState, Food, Coord, State as SnakeState } from '../reducers/snake';
import { State as SettingsState } from '../reducers/settings';

import { CheckDestination, ChangeDirection } from '../actions/snake';

export interface GridProps {
    dispatch: (action: any) => any,
    snake: SnakeState,
    settings: SettingsState
}

class Grid extends React.Component<GridProps, {}> {

    // boundHandleKeyDown needed for TS to accept (e: React.KeyboardEvent<Document>): void
    // as EventListenerOrEventListenerObject type
    timer: number;
    boundHandleKeyDown: EventListener;

    componentDidMount() {
        this.timer = window.setInterval( () => this.props.dispatch( CheckDestination() ), 300 );
        this.boundHandleKeyDown = this.handleKeyDown.bind(this);
        document.addEventListener( 'keydown', this.boundHandleKeyDown );
    }

    componentWillUnmount() {
        clearInterval( this.timer );
        document.removeEventListener( 'keydown', this.boundHandleKeyDown);
    }

    handleKeyDown = ( event: React.KeyboardEvent<Document> ): void => {
        const canChangeDirection = this.props.snake.canChangeDirection;

        if (!canChangeDirection) return;
        const LEFT_ARROW = 37;
        const RIGHT_ARROW = 39;
        const UP_ARROW = 38;
        const DOWN_ARROW = 40;
        switch ( event.keyCode ) {
            case LEFT_ARROW:
                this.props.dispatch( ChangeDirection( 'LEFT' ) );
                break;
            case RIGHT_ARROW:
                this.props.dispatch( ChangeDirection( 'RIGHT' ) );
                break;
            case UP_ARROW:
                this.props.dispatch( ChangeDirection( 'UP' ) );
                break;
            case DOWN_ARROW:
                this.props.dispatch( ChangeDirection( 'DOWN' ) );
                break;
            default:
                break;
        }
    }

    createMatrix = ( width: number, height: number ) => {
        const from1toHeightArray = Array.from( Array( height ).keys() ).map( y => ++y );
        return from1toHeightArray.map( rowNumber => this.createRow( width, rowNumber ) );
    }

    isSnake = ( snakeCoords: BodyState, x: number, y: number ) => {
        return snakeCoords.some( ( coord: Coord ) => coord.x === x && coord.y === y );
    }

    isFood = ( foodCoords: Food, x: number, y: number ) => {
        return ( foodCoords.x === x ) && ( foodCoords.y === y );
    }

    createRow = ( width: number, rowNumber: number ) => {
        const from1toWidthArray: number[] = Array.from( Array( width ).keys() ).map( x => ++x );
        const { body: snakeCoords, food: foodCoords } = this.props.snake;
        return (
            <div>
                {from1toWidthArray.map((colNumber, index) => {
                    return (
                        <Square
                            key={index}
                            isSnake={this.isSnake( snakeCoords, colNumber, rowNumber )}
                            isFood={this.isFood( foodCoords, colNumber, rowNumber )} 
                        />
                    );
                })}
            </div>
        );
    }

    render() {
        const { width, height } = this.props.settings;
        const squaresMatrix = this.createMatrix( width, height );

        return (
            <div className="border">
                {squaresMatrix}
            </div> 
        );
    }
}

export default Grid;