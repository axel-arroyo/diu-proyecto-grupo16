export const ADD_DATA = 'ADD_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export function addData(payload) {
    return {
        type: ADD_DATA,
        payload
    };
}

export function updateData(payload) {
    return {
        type: UPDATE_DATA,
        payload
    };
}