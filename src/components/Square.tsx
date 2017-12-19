import * as React from 'react';
import './Square.css';

class Square extends React.Component<any, any> {
    render() {
        const { isSnake } = this.props;
        let className = 'square';
        if ( isSnake ) {
            className += ' snake';
        }
        return (
            <div className={className}></div>
        );
    }
}
export default Square;