import * as constants from '../constants';

import { State } from '../reducers/settings';

// Interface
export interface ChangeSettings {
    type: constants.CHANGE_SETTINGS,
    settings: State
}

export type Actions = ChangeSettings;

// Action creator
export function ChangeSettings(newSettings: State): ChangeSettings {
    return {
        type: constants.CHANGE_SETTINGS,
        settings: newSettings
    };
}