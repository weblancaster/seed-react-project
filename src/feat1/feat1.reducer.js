import {
    CHANGE_COUNTER
} from '../shared/constants';

const initialState = {
    counter: 0
};

export default function feat1(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COUNTER:
            return Object.assign({}, state, {
                counter: action.counter
            });
        default:
            return state;
    }
}
