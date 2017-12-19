import * as React from 'react';
import './Square.css';

class Square extends React.Component<any, any> {
    render() {
        const {width, height} = this.props;
        return (
            <div className="square">{width}{height}</div>
        );
    }
  }
export default Square;