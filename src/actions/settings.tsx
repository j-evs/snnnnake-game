import * as constants from '../constants';

import { State } from '../reducers/settings';

export interface ChangeSettings {
    type: constants.CHANGE_SETTINGS,
    settings: State
}


export function ChangeSettings(newSettings: State): ChangeSettings {
    return {
        type: constants.CHANGE_SETTINGS,
        settings: newSettings
    };
}



export type Actions = ChangeSettings;