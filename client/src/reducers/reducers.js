import { registerReducer, loginReducer } from './authReducer';
import stats from './statsReducer';

export default {
    register: registerReducer,
    login: loginReducer,
    stats
}