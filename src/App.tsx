import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { RootState } from './reducers';

import { Route, BrowserRouter, NavLink } from 'react-router-dom';

import Game from './components/Game';
import Settings from './components/Settings';

interface Props extends RootState {}

class Layout extends React.Component<Props, {}> {
    render() {
        return (
            <div className="primary-layout">
                <header>
                    <h1 className="title">Mega Snake</h1>
                    <nav className="nav">
                        <NavLink className="link" to="/start">Start</NavLink>
                        <NavLink className="link" to="/settings">Settings</NavLink>
                    </nav>
                </header>
                <main className="wrapper">
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

const App = ( props: Props ) => (
    <BrowserRouter>
        <Layout {...props} />
    </BrowserRouter>
);

export default connect( mapStateToProps )( App );