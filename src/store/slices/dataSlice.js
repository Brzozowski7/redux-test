import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    key1: {
        key11: {
            key111: {
                payee: {
                    name: 'value1121',
                    address: 'value1122',
                    street: 'value1121',
                    phone: 'value1122',
                },
                key1112: 'value1112',
            },
        },
        key12: {
            key121: {
                key1211: [{
                    person: {
                        name: 'Jan',
                        address: 'Kowalski',
                        street: 'Mhmmm',
                        sibling: {
                            name: 'Marysia',
                            address: 'Kowalska',
                            street: 'Mhmmm',
                        },
                    },
                }, {
                    person: {
                        name: 'value1121',
                        address: 'value1122',
                        street: 'value1121',
                        phone: 'value1122',
                        sibling: {
                            name: 'value1121',
                            address: 'value1122',
                            street: 'value1121',
                        },
                    },
                }, {
                    person: {
                        name: 'value1121',
                        address: 'value1122',
                        street: 'value1121',
                        phone: 'value1122',
                        sibling: {
                            name: 'value1121',
                            address: 'value1122',
                            street: 'value1121',
                        },
                    },
                }],
                key1212: 'value1212',
            },
            key122: {
                key1221: 'value1221',
                key1222: 'value1222',
            },
        },
    },
    key2: {
        key21: {
            key211: {
                key2111: 'value2111',
                key2112: 'value2112',
            },
            key212: {
                key2121: 'value2121',
                key2122: 'value2122',
            },
        },
        key22: {
            key221: {
                key2211: '',
                key2212: '',
            },
            key222: {
                key2221: 'value2221',
                key2222: 'value2222',
            },
        },
    },
};

const selectMyState = (state) => state.data;

export const selectPayee = createSelector(
    selectMyState,
    (myState) => myState?.key1?.key11?.key111?.payee
);


export const selectPersonAtIndex = (index) =>
    createSelector(
        selectMyState,
        (myState) => myState?.key1?.key12?.key121?.key1211[index].person
    );

export const selectPersonSiblingAtIndex = (index) =>
    createSelector(
        selectMyState,
        (myState) => myState?.key1?.key12?.key121?.key1211[index].person.sibling
    );

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        handleChangePayee: (state, { payload }) => {
            state.key1.key11.key111.payee[payload.key] = payload.value
        },
        handleChangePerson: (state, { payload }) => {
            state.key1.key12.key121.key1211[payload.index].person[payload.key] = payload.value
        },
        handleChangePersonSibling: (state, { payload }) => {
            state.key1.key12.key121.key1211[payload.index].person.sibling[payload.key] = payload.value
        }
    },
});

export const { handleChangePayee, handleChangePerson, handleChangePersonSibling } = dataSlice.actions;

export default dataSlice.reducer;


