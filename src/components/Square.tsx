import * as React from 'react';
import './Square.css';

export interface SquareProps {
    isSnake: boolean,
    isFood: boolean
}

class Square extends React.PureComponent<SquareProps, {}> {
    render() {
        const { isSnake, isFood } = this.props;

        let className = 'square';
        if ( isSnake ) {
            className += ' snake';
        }
        if ( isFood ) {
            className += ' food';
        }
        return (
            <div className={className} />
        );
    }
}

export default Square;