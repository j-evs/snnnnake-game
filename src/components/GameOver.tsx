import * as React from 'react';

interface GameOverProps {
    startAgain: () => any
}

export const GameOver: React.SFC<GameOverProps> = (props) => {
    return (
        <div>
            Game over. Want to <button onClick={props.startAgain}>try again?</button>
        </div>
    );
}

export default GameOver;