import { combineReducers } from 'redux';

import { reducer as snakeReducer, State as SnakeState } from './snake';
import { reducer as settingsReducer, State as SettingsState } from './settings';
// import { RootAction } from '../actions';

export interface RootState {
    snake: SnakeState,
    settings: SettingsState
}

export const rootReducer = combineReducers<RootState>({
    snake: snakeReducer,
    settings: settingsReducer
});

