import * as React from 'react';
import './Square.css';

export interface SquareProps {
    isSnake: boolean,
    isFood: boolean,
    isHead: boolean
}

class Square extends React.PureComponent<SquareProps, {}> {
    render() {
        const { isSnake, isFood, isHead } = this.props;
        
        const foodClasses: string[] = [
            ' navi', ' eg', ' spirit', ' empire', ' fnatic',
            ' liquid', ' newbee', ' og', ' secret'
        ];

        let className = 'square';
        if ( isSnake ) {
            className += ' snake';
        }

        if ( isHead ) {
            className += ' vp';
        }

        if ( isFood ) {
            className += foodClasses[Math.floor(foodClasses.length * Math.random())];
        }
        return (
            <div className={className} />
        );
    }
}

export default Square;