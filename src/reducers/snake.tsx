import { Actions as SnakeActions } from '../actions/snake';
import { MOVE, CHANGE_DIRECTION } from '../constants/index';

// import { combineReducers } from 'redux';

// import { reducer as body, State as BodyState } from './body';

// import { StoreState } from '../types/index';

export interface Coord {
    x: number,
    y: number
}

export interface BodyState extends Array<Coord> { };

export interface State {
    direction: string,
    body: BodyState
}

const initialState: State = {
    direction: 'RIGHT',
    body: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
}

export function reducer( state = initialState, action: SnakeActions ): State {
    console.log( 'state', state.direction );
    // console.log( 'action', action )
    switch ( action.type ) {
        case CHANGE_DIRECTION:
            return { ...state, direction: isDirectionReverse( state.direction, action.newDirection ) ? state.direction : action.newDirection }
        case MOVE: {
            return { ...state, body: updateBodyPosition( state ) }
        }
    }
    return state;
}

//helpers
function updateBodyPosition( { direction, body }: { direction: string, body: BodyState } ): BodyState {
    const { x, y } = getHeadPosition( body );
    switch ( direction ) {
        case 'RIGHT':
            return [...body.slice( 1 ), { x: x + 1, y }];
        case 'UP':
            return [...body.slice( 1 ), { x, y: y - 1 }];
        case 'DOWN':
            return [...body.slice( 1 ), { x, y: y + 1 }];
        case 'LEFT':
            return [...body.slice( 1 ), { x: x - 1, y }];
    }
    return body;
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