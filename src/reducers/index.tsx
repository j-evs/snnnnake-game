import { combineReducers } from 'redux';

import { reducer as snakeReducer, State as SnakeState } from './snake';
// import { RootAction } from '../actions';

export interface RootState {
    snake: SnakeState
}

export const rootReducer = combineReducers<RootState>({
    snake: snakeReducer
});

