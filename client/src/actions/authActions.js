import { REGISTER_SUCCESS, LOGIN_SUCCESS } from '../actions/actionTypes';
import { login, register } from '../api/remote';

function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

function registerAction (name, email, password) {
    return  (dispatch) => {
         //Изпращаме на сървъра данните и res е това, което ни връща сървъра json format
         return register(name, email, password)
         .then(json => {
                if (json.success) {
                   dispatch(registerSuccess());
                }
             })
    }
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                    //запазваме си в сесия за автентикация това което ни връща сървъра
                localStorage.setItem('authToken', json.token);
                localStorage.setItem('user', json.user.name);
                dispatch(loginSuccess());
            });
    }
}

export {registerAction, loginAction};