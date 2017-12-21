import { Actions as SnakeActions } from './snake';
import { Actions as SettingsActions} from './settings';

export type RootAction = SnakeActions | SettingsActions;