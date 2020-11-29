export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const IS_FILLED = 'IS_FILLED';

export const updateFormData = ({ name, value }) => {
    return {
        type: UPDATE_FORM_DATA,
        payload: {
            name,
            value
        }
    };
};

export const isFilledFormData = boolData => {
    return {
        type: IS_FILLED,
        payload: {
            boolData
        }
    };
};