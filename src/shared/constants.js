import {
    resolveHost
} from './utils';

export const API_HOST = resolveHost();
export const API = `${API_HOST}/api`;

// feat1
export const CHANGE_COUNTER = 'CHANGE_COUNTER';
