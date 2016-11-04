import {
    CHANGE_COUNTER
} from '../shared/constants';

export function changeCounter(counter) {
    return {
        type: CHANGE_COUNTER,
        counter: counter + 1
    }
}
