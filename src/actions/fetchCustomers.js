import { FETCH_CUSTOMERS } from './../constans';
import { createAction } from 'redux-actions';

export const fetchCustomers = createAction(FETCH_CUSTOMERS);