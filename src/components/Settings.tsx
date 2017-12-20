import * as React from 'react';

import { RootState } from '../reducers';
import { ChangeSettings } from '../actions/settings';

import {connect}  from 'react-redux';

export interface Props {
    width: number,
    height: number
    dispatch?: (action: any) => void;
  }

  export interface State {
    width: number,
    height: number
  }

class Settings extends React.Component<any, any> {
      constructor(props: Props) {
        super(props);
        const { width, height } = this.props;
        this.state = {
          width,
          height
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = Number(target.value);
        const name = target.name;
    
        // this.setState({
        //   [name]: value
        // });

        name === 'width' 
            ? this.setState({width: value})
            : this.setState({height: value})
      }

      handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
          event.preventDefault();
          const {width, height} = this.state;
          this.props.dispatch(ChangeSettings({width, height}));
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Width
              <input
                name="width"
                type="number"
                value={this.state.width}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Height
              <input
                name="height"
                type="number"
                value={this.state.height}
                onChange={this.handleInputChange} />
            </label>
            <button type="submit">GO!</button>
          </form>
        );
      }
  }

function mapStateToProps( state: RootState ) {
    return state.settings;
}
export default connect( mapStateToProps )( Settings );