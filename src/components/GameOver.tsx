import * as React from 'react';

interface GameOverProps {
    startAgain: () => any,
    score: number
}

export const GameOver: React.SFC<GameOverProps> = ({score, startAgain}) => {
    return (
        <div>
            <p>Game over.</p>
            <p>Your score is {score} </p>
            <p>Want to <button onClick={startAgain}>try again?</button></p>
        </div>
    );
};

export default GameOver;