import { combineReducers } from 'redux';

import { reducer as snakeReducer, State as SnakeState } from './snake';
import { reducer as settingsReducer, State as SettingsState } from './settings';

// Interface
export interface RootState {
    snake: SnakeState,
    settings: SettingsState
}

// Reducer
export const rootReducer = combineReducers<RootState>({
    snake: snakeReducer,
    settings: settingsReducer
});