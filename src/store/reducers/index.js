import { UPDATE_FORM_DATA } from "../actions";

export const initialState = {
    name: '',
    surname: '',
    birthDate: '',
    select: ''
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_FORM_DATA:
            return reduceUpdateFormData(state, payload);
        default:
            return state;
    }
};

const reduceUpdateFormData = (state, { name, value }) => {
    return {
        ...state,
        [name]: value
    };
};