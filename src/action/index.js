import * as types from './ActionTypes';

export function set_univ_list(univs){
    return {
        type: types.SET_UNIV_LIST,
        univs
    }
}

export function auth_login(_sess, _nickname){
    return{
        type: types.AUTH_LOGIN,
        _sess,
        _nickname
        // _id,
    }
}

export function auth_logout(){
    return{
        type: types.AUTH_LOGOUT,
    }
}

export function auth_success(_sess, _nickname){
    return{
        type: types.AUTH_SUCCESS,
        _sess,
        _nickname
        // _id,
    }
}

export function auth_failure(){
    return{
        type: types.AUTH_FAILURE,
    }
}