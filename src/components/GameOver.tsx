import * as React from 'react';
import './GameOver.css';

interface GameOverProps {
    startAgain: () => any,
    score: number
}

export const GameOver: React.SFC<GameOverProps> = ({score, startAgain}) => {
    return (
        <div className="gameover">
            <p className="gameover__info">Game over</p>
            <p className="gameover__info">Your score is {score} </p>
            <p className="gameover__info">Want to <button onClick={startAgain}>try again?</button></p>
        </div>
    );
};

export default GameOver;