import * as React from 'react';

import { connect } from 'react-redux';
import { RootState } from '../reducers';

import { Reset } from '../actions/snake';

import Grid from './Grid';
import GameOver from './GameOver';

export interface GameProps extends RootState {
    dispatch: (action: any) => void
}

class Game extends React.Component<GameProps, {}> {
    componentDidMount() {
        this.props.dispatch(Reset());
    }

    startAgain = () => {
        this.props.dispatch(Reset());
    }

    render() {
        const score = this.props.snake.body.length - 3;

        if (this.props.snake.gameOver) {
            return <GameOver startAgain={this.startAgain} score={this.props.snake.body.length - 3}/>;
        }

        return (
            <div>
                <Grid {...this.props}/>
                <div>Score: {score}</div>
            </div>
        );
    }
}

function mapStateToProps( state: RootState ) {
    return state;
}
export default connect(mapStateToProps)(Game);