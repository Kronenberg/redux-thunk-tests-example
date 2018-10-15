import {
    GET_USERS_PENDING,
    GET_USERS_SUCCESS,
    GET_USERS_REJECTED,
    GET_USERS_TO_INITIAL
} from '../constants/actionTypes';

const initialSearchState = {
    pending: false,
    success: false,
    rejected: false,
    response: []
}

function searchShowReducer(state = initialSearchState, action) {
    switch(action.type) {
        case GET_USERS_PENDING: {
            return {
                ...state,
                pending: true
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,
                response: action.payload
            }
        }
        case GET_USERS_REJECTED: {
            return {
                ...state,
                success: false,
                rejected: true,
                response: action.payload
            }
        }
        case GET_USERS_TO_INITIAL: {
            return {
                ...state,
                success: false,
                rejected: false
            }
        }
        default: {
            return state;
        }
    }

}

export default searchShowReducer;