import {
    UPDATE_FORM_DATA,
    IS_FILLED
} from "../actions";

export const initialState = {
    data: {
        name: '',
        surname: '',
        birthDate: '',
        select: ''
    },
    isFilled: false
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_FORM_DATA:
            return reduceUpdateFormData(state, payload);
        case IS_FILLED:
            return reduceIsFilled(state, payload);
        default:
            return state;
    }
};

const reduceUpdateFormData = (state, { name, value }) => {
    return {
        ...state,
        data: {...state.data, [name]: value}
    };
};

const reduceIsFilled = (state, { boolData }) => {
    return {
        ...state,
        isFilled: boolData
    };
};