import { toast } from 'react-toastify';
import 'whatwg-fetch'

class generalAPI {

  static getData(fetchURL,method, data) {
    let header;
    if (sessionStorage.token) {
      header = new Headers({
        'Cache-Control': 'no-cache',
        'token': sessionStorage.token,
        'Content-Type': 'application/json'
      })
    } else {
      header = new Headers({
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      })
    }



    const request = new Request(fetchURL, {
      method,
      headers: header,
      body: data
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      let errorJson = {
        "responseMessage": {
          "action": "Connection Error",
          "data": {
            "message": {
              "status": "ERROR",
              "errorDescription": `[ERROR HTTP REQUEST]: ${error}`,
              "routeTo": "success",
              "displayToUser": true
            }
          }
        }

      };
      toast.error(`[ERROR HTTP REQUEST]: Please check your Network, if it's working then contact to the site administrator.`,
        {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'toasterError'
        });
      return errorJson;
    });

  }


}

export default generalAPI;
