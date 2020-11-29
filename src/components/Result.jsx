import React from 'react'
import { connect } from 'react-redux';

const Result = ({ formData }) => {
    const { name, surname, birthDate, select } = formData;
    return (
        <div>
            <div>
                name: {name}
            </div>
            <div>
                surname: {surname}
            </div>
            <div>
                birthDate: {birthDate}
            </div>
            <div>
                select: {select}
            </div>
        </div>
    )
}

const mapStateToProps = ({ data }) => {
    return {
        formData: data
    };
};

export default connect(mapStateToProps)(Result);