import { Actions as SnakeActions } from '../actions/snake';
import { MOVE, CHANGE_DIRECTION, GROW, CREATE_FOOD, RESET } from '../constants/index';

// import { combineReducers } from 'redux';

// import { reducer as body, State as BodyState } from './body';

// import { StoreState } from '../types/index';

export interface Coord {
    x: number,
    y: number
}

export interface BodyState extends Array<Coord> { };
export interface Food extends Coord { };

export interface State {
    direction: string,
    body: BodyState,
    food: Food
}

const initialState: State = {
    direction: 'RIGHT',
    body: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
    food: {x: 4, y: 4}
}

export function reducer( state = initialState, action: SnakeActions ): State {
    switch ( action.type ) {
        case CHANGE_DIRECTION:
            return { ...state, direction: isDirectionReverse( state.direction, action.newDirection ) ? state.direction : action.newDirection };
        case GROW: {
            return {...state, body: growBody(state)};
        }
        case CREATE_FOOD: {
            return {...state, food: action.newFood};
        }
        case MOVE: {
            return { ...state, body: updateBodyPosition( state ) };
        }
        case RESET: {
            return initialState;
        }

    }
    return state;
}

//helpers
function updateBodyPosition( { direction, body }: { direction: string, body: BodyState } ): BodyState {
    const nextHeadPosition = getNextHeadPosition(body, direction);

    return [...body.slice( 1 ), nextHeadPosition];
}

function isDirectionReverse( oldDirection: string, newDirection: string ) {
    const vertical = ['UP', 'DOWN'];
    const horizontal = ['LEFT', 'RIGHT'];

    if ( (vertical.indexOf( oldDirection ) != -1 && vertical.indexOf( newDirection ) != -1)
        || (horizontal.indexOf( oldDirection ) != -1 && horizontal.indexOf( newDirection ) != -1 )) {
        return true;
    }
    return false;
}

function getHeadPosition( body: BodyState ) {
    return body[body.length - 1];
}

export function getNextHeadPosition(body: BodyState, direction: string) {
    const headPosition = getHeadPosition(body);
    const { x, y } = headPosition;
    switch ( direction ) {
        case 'RIGHT':
            return { x: x + 1, y };
        case 'UP':
            return { x, y: y - 1 };
        case 'DOWN':
            return { x, y: y + 1 };
        case 'LEFT':
            return { x: x - 1, y };
    }
    return headPosition;
}

function growBody( { direction, body }: { direction: string, body: BodyState } ): BodyState {
    const nextHeadPosition = getNextHeadPosition(body, direction);
    return [...body, nextHeadPosition];
}
