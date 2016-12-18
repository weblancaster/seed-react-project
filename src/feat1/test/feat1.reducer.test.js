import * as constants from '../../shared/constants.js';
import feat1 from '../feat1.reducer';

describe('feat1.reducer', () => {
    it('handles default state', () => {
        const initialState = {
            counter: 0
        };

        expect(feat1(initialState, {})).toEqual(initialState);
    });

    it('handles change_counter action', () => {
        const action = {
            type: constants.CHANGE_COUNTER,
            counter: 1
        };
        const expectedState = {
            counter: 1
        };

        expect(feat1({}, action)).toEqual(expectedState);
    });
})
