import {
    changeCounter
} from '../feat1.actions';

describe('feat1.action', () => {
    it('handles changeCounter action', () => {
        const expectedAction = {
            counter: 2,
            type: 'CHANGE_COUNTER'
        };

        expect(changeCounter(1)).toEqual(expectedAction);
    });
});
