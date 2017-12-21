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
        return this.props.snake.gameOver
        ? <GameOver startAgain={this.startAgain} score={this.props.snake.body.length - 3}/>
        : <Grid {...this.props}/>;
    }
}

function mapStateToProps( state: RootState ) {
    return state;
}
export default connect(mapStateToProps)(Game);