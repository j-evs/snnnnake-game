import * as React from 'react';
import './Square.css';

class Square extends React.PureComponent<any, any> {
    render() {
        const { isSnake, isFood } = this.props;
        let className = 'square';
        if ( isSnake ) {
            className += ' snake';
        }

        if ( isFood ) {
            className += ' food'
        }
        return (
            <div className={className}></div>
        );
    }
}
export default Square;