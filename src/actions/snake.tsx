import * as constants from '../constants';

import { RootState } from '../reducers';
import { Coord, BodyState, getNextHeadPosition } from '../reducers/snake';
import { State as SettingsState} from '../reducers/settings'

import { ThunkAction } from 'redux-thunk';

export interface ChangeDirection {
    type: constants.CHANGE_DIRECTION,
    newDirection: string
}

export interface Move {
    type: constants.MOVE
}

export interface Grow {
    type: constants.GROW
}

export interface GameOver {
    type: constants.GAME_OVER
}

export interface CreateFood {
    type: constants.CREATE_FOOD,
    newFood: Coord
}


export function ChangeDirection(newDirection: string): ChangeDirection {
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

export function Grow(): Grow {
    return {
        type: constants.GROW
    }
}


export function CreateFood(newFood: Coord): CreateFood {
    return {
        type: constants.CREATE_FOOD,
        newFood
    }
}

export function GameOver(): GameOver {
    return {
        type: constants.GAME_OVER
    }
}

export function CheckDestination(): ThunkAction<Move|Grow|GameOver|CreateFood,RootState,null> {
    return (dispatch, getState) => {
        const { snake: {direction, body, food}, settings } = getState();
        const nextHeadPosition = getNextHeadPosition(body, direction);
        if (isFood(nextHeadPosition, food)) {
            const newFood = getNewFoodPosition(settings, body);
            dispatch(Grow());
            return dispatch(CreateFood(newFood));
        } else if (isDeadEnd(nextHeadPosition, body, settings)) {
            return dispatch(GameOver())
        } else {
            return dispatch(Move())
        }
    };
}


function isFood(nextHeadPosition: Coord, food: Coord) {
    return isSameCoords(nextHeadPosition, food);
}

function isDeadEnd(nextHeadPosition:Coord, body:BodyState, settings: SettingsState) {
    const isBodyCollision = body.some((bodyCell: Coord) => isSameCoords(bodyCell, nextHeadPosition));
    const isBoundariesCollision = nextHeadPosition.x < 1
        || nextHeadPosition.y < 1 
        || nextHeadPosition.x > settings.width
        || nextHeadPosition.y > settings.height;


        
    return isBodyCollision || isBoundariesCollision;
}

function isSameCoords(coords1: Coord, coords2: Coord) {
    const {x: xCoords1, y: yCoords1} = coords1;
    const {x: xCoords2, y: yCoords2} = coords2;

    return xCoords1 === xCoords2 && yCoords1 === yCoords2;
}

function getNewFoodPosition(settings: SettingsState, body: BodyState) {
    const { width, height } = settings;
    const availableXArray: number[] = Array
        .from(Array(width).keys()).map(x => ++x)
        .filter(x => {
            return body.some((bodyCell: Coord) => bodyCell.x !== x);
        });

    const availableYArray: number[] = Array
        .from(Array(height).keys()).map(y => ++y)
        .filter(y => {
            return body.some((bodyCell: Coord) => bodyCell.y !== y);
        });
    
    const randomX = availableXArray[Math.floor(availableXArray.length * Math.random())]
    const randomY = availableYArray[Math.floor(availableYArray.length * Math.random())]
    
    return {x: randomX, y: randomY};
}


export type Actions = ChangeDirection | Move | Grow | GameOver | CreateFood;