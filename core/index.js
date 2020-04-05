import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
/*action imports*/
import { generalActionLoad } from './actions/generalAction';

/*store configurations imports*/
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(generalActionLoad());

toast.configure({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
})


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
