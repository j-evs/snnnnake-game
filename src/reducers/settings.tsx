import { Actions as SettingsActions } from '../actions/settings';
import { CHANGE_SETTINGS } from '../constants/index';

export interface State {
    width: number,
    height: number
}

const initialState: State = {
    width: 10,
    height: 20
}

export function reducer( state = initialState, action: SettingsActions ): State {
    switch ( action.type ) {
        case CHANGE_SETTINGS:
            return action.settings
    }
    return state;
}
