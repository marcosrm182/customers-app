import { FETCH_CUSTOMERS } from './../constans';
import { createAction } from 'redux-actions';

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Pezuño",
        "age": 37 
    },
    {
        "dni": "30000000",
        "name": "Otro",
        "age": 35
    },
    {
        "dni": "33000000",
        "name": "Luis Martinez",
        "age": 32
    }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS);