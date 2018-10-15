// In this case it works
// import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// At this case with default(): MockStore is not a fucntion
const configureStore = require('redux-mock-store').default();
// ConfigureStore is not a fucntion
// const configureStore = require('redux-mock-store');

import getUsers from "./PlaceHolderApiActions";
import * as TYPES from '../constants/actionTypes';
import { getAction } from './utils/getTestActions';
import { payload } from "./__mocks__/user";

export const mockStore = configureMockStore([thunk]);
// recipient validation
describe("REDUX THUNK TESTER", () => {
    it("redux-thunk tester", async () => {

        const store = mockStore();
        store.dispatch(getUsers());

        expect(await getAction(store, TYPES.GET_USERS_PENDING))
            .toEqual({type: TYPES.GET_USERS_PENDING });

        expect(await getAction(store, TYPES.GET_USERS_SUCCESS))
            .toEqual({type: TYPES.GET_USERS_SUCCESS, payload});

    });

    it('async-thunk snapshot', () => {
        const store = mockStore();

        store.dispatch(getUsers());

        expect(store.getActions()).toMatchSnapshot();
    })
});