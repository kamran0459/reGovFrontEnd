import initialState from './initialState';
import { toast } from 'react-toastify';


export default function generalReducer(state = initialState, action) {
    if (action.resultData) {
        let actionDataKey = Object.keys(action.resultData)[0];
        let rData = action.resultData[actionDataKey];
        if (rData.data) {

            if (rData.data.message.displayToUser === true) {
                if (rData.data.message.status === 'OK') {
                    toast.success(rData.data.message.description,
                        {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            className: 'toasterSuccess'
                        });
                } else {
                    toast.error(JSON.stringify(rData.data.message.description),
                        {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            className: 'toasterError'
                        });
                }
            }
            // if (rData.message.status === 'OK' && rData.message.newPageURL) {
            //     console.log('rData', rData)
            //     history.push('/')
            // }

        }

        return {
            ...state,
            [actionDataKey]: {
                ...state[actionDataKey],
                ...action.resultData[actionDataKey]
            }
        }


    } else {
        return state;
    }

}
