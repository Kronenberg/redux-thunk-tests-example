import {
    GET_USERS_PENDING,
    GET_USERS_SUCCESS,
    GET_USERS_REJECTED,
    GET_USERS_TO_INITIAL
} from '../constants/actionTypes';

import axios from 'axios';
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos/1";

export const receiveDataSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
};

export const receiveDataRejected = (error) => {
    return {
        type: GET_USERS_REJECTED,
        payload: error
    }
};

export  const receiveDataPending = () => {
    return {
        type: GET_USERS_PENDING
    }
};

export const getUsers = () =>
    (dispatch) => {
        dispatch(receiveDataPending());
        axios.get(API_ENDPOINT)
            .then((response) => {
                dispatch(receiveDataSuccess(response.data));
            })
            .catch((error) => {
                dispatch(receiveDataRejected(error));
            });
    };

    export default getUsers;
