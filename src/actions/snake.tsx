import * as constants from '../constants'

export interface ChangeDirection {
    type: constants.CHANGE_DIRECTION,
    newDirection: string
}

export interface Move {
    type: constants.MOVE
}


export function ChangeDirection(newDirection: string): ChangeDirection {
    console.log('newDirection', newDirection);
    return {
        type: constants.CHANGE_DIRECTION,
        newDirection
    };
}

export function Move(): Move {
    return {
        type: constants.MOVE
    }
};


export type Actions = ChangeDirection | Move;