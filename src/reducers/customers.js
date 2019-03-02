import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constans';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});