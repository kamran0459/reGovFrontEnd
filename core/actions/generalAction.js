import generalAPI from '../api/generalAPI';


export function generalActionLoad(resultData) {
    return { type: 'GENRAL_LOAD_SUCCESS', resultData };
}

export function generalProcess(fetchURL, method, actionData) {
    return function (dispatch) {
        let loginDate = new Date(sessionStorage.lastRequestTime);
        let currentDate = new Date();
        const seconds = parseInt(Math.abs(currentDate.getTime() - loginDate.getTime()) / (1000) % 60);
        if (seconds > 50000000000000000) {
            // auth.lockedUser();
        }
        else
            sessionStorage.lastRequestTime = new Date();
        return generalAPI.getData(fetchURL, method, actionData).then(resultSet => {
            dispatch(generalActionLoad(resultSet));
        }).catch(error => {
            console.log(error);
        });


    };

}
