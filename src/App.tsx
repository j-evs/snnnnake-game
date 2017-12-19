import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { RootState } from './reducers';

import { Route, BrowserRouter } from 'react-router-dom';

import Game from './components/Game';
import Settings from './components/Settings';

export interface Props {

}

export interface State {

}

class Layout extends React.Component<Props, State> {
    render() {
        return (
            <div className="primary-layout">
                <header>
                    Our React Router 4 App
                </header>
                <main>
                    <Route path="/start" exact component={Game} />
                    <Route path="/settings" component={Settings} />
                </main>
            </div>
        );
    }
}

function mapStateToProps( state: RootState ) {
    return state;
}

const App = (props: Props) => (
    <BrowserRouter>
        <Layout {...props}/>
    </BrowserRouter>
)

export default connect( mapStateToProps )( App );
