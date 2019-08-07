import update from "immutability-helper";
import moment from 'moment';

const driverState = {
    singleDriver: {
        firstName: '',
        lastName: '',
        dob: '',
        licNo: '',
        email: '',
        number: '',
        licExpDate: '',
    },
    driverList: []
};

const driverReducer = function (state, action) {
    let newState = state;

    if (typeof state === 'undefined') {
        return driverState;
    }

    switch (action.type) {

        case 'UPDATE_SINGLE_DRIVER_DATA':
            newState = update(state, {
                singleDriver: {
                    [action.data.prop]: {
                        $set: action.data.value
                    }
                }
            });
            break;
    }

    return newState;

}

export default driverReducer;