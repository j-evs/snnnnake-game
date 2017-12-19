import * as React from 'react';

import Square from './Square';

import { BodyState, Coord } from '../reducers/snake';
import { Move, ChangeDirection } from '../actions/snake';

import { setInterval } from 'timers';
class Grid extends React.Component<any, any> {
    timer: NodeJS.Timer | number | null;
    
    componentDidMount() {
        this.timer = setInterval(() => this.props.dispatch(Move()), 1000);
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        this.timer = null;
    }

    handleKeyDown(event: React.KeyboardEvent<Document>): any {
        console.log('event', event);
        const LEFT_ARROW = 37;
        const RIGHT_ARROW = 39;
        const UP_ARROW = 38;
        const DOWN_ARROW = 40;
        switch( event.keyCode ) {
            case LEFT_ARROW:
                this.props.dispatch(ChangeDirection('LEFT'));
                break;
            case RIGHT_ARROW:
                this.props.dispatch(ChangeDirection('RIGHT'));
                break;
            case UP_ARROW:
                this.props.dispatch(ChangeDirection('UP'));
                break;
            case DOWN_ARROW:
                this.props.dispatch(ChangeDirection('DOWN'));
                break;
            default: 
                break;
        }
    }

    createMatrix(width: number, height: number) {
        const from1toHeightArray = Array.from(Array(height).keys()).map(x => x++);
        return from1toHeightArray.map(height => this.createRow(width, height));
    }

    isSnake = (snakeCoords: BodyState, x: number, y: number) => {
        return snakeCoords.some((coord: Coord) => coord.x === x && coord.y === y);
    }
    
    createRow(width: number, rowNumber: number) {
        const from1toWidthArray: number[] = Array.from(Array(width).keys()).map(x => x++);
        const snakeCoords = this.props.body;
        return (
            <div>
                {from1toWidthArray.map(width => {
                    return <Square x={width} y={rowNumber} isSnake={this.isSnake(snakeCoords, width, rowNumber)} />
                })}
            </div>
        );
    }

    render() {
        const width = 10;
        const height = 20;
        const squaresMatrix = this.createMatrix(width, height);
        return squaresMatrix;
    }
  }
export default Grid;