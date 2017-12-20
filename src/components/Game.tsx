import * as React from 'react';

import { connect } from 'react-redux';
import { RootState } from '../reducers';

import Grid from './Grid';

class Game extends React.Component<any, any> {
    render() {
        return (
            <Grid {...this.props}/>
        );
    }
}

function mapStateToProps( state: RootState ) {
    return state;
}
export default connect(mapStateToProps)(Game);