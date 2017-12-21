import * as React from 'react';

import './Settings.css';

import { RootState } from '../reducers';
import { ChangeSettings } from '../actions/settings';

import { connect } from 'react-redux';

export interface SettingsProps {
    width: number,
    height: number
    dispatch: ( action: any ) => void;
}

interface State {
    width: number,
    height: number
}

class Settings extends React.Component<SettingsProps, State> {
    state: State = {
        width: this.props.width,
        height: this.props.height
    };

    handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const target = event.target;
        const value = Number( target.value );
        const name = target.name;

        name === 'width'
            ? this.setState( { width: value } )
            : this.setState( { height: value } )
    }

    handleSubmit = ( event: React.ChangeEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const { width, height } = this.state;
        this.props.dispatch( ChangeSettings( { width, height } ) );
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <label>Width:</label>
                    <input
                        className="form-field__input"
                        name="width"
                        type="number"
                        value={this.state.width}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-field">
                    <label>Height:</label>
                    <input
                        className="form-field__input"
                        name="height"
                        type="number"
                        value={this.state.height}
                        onChange={this.handleInputChange} />
                </div>
                <button type="submit">Apply settings</button>
            </form>
        );
    }
}

function mapStateToProps( state: RootState ) {
    return state.settings;
}
export default connect( mapStateToProps )( Settings );