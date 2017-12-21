import * as React from 'react';

import { connect } from 'react-redux';
import { RootState } from '../reducers';

import { Reset } from '../actions/snake';

import Grid from './Grid';
import GameOver from './GameOver';


class Game extends React.Component<any, any> {
    constructor(props: RootState) {
        super(props);
        this.startAgain = this.startAgain.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(Reset());
    }

    startAgain() {
        this.props.dispatch(Reset());
    }

    render() {
        return this.props.snake.gameOver
        ? <GameOver startAgain={this.startAgain} />
        : <Grid {...this.props}/>
    }
}

function mapStateToProps( state: RootState ) {
    return state;
}
export default connect(mapStateToProps)(Game);