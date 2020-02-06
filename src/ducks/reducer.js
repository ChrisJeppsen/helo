import axios from 'axios'

const initialState = {
    user: {
        id: 0,
        username: '',
    },
    post: [
         
    ]
}

const GET_USER = 'GET_USER'

export const getUser = () => {
    let user = axios.get('/auth/user').then(res => res.data)
    return {
        type: GET_USER,
        payload: user
    }
}

const GET_POST = 'GET_POST'

export const getPost = () => {
    let post = axios.get('/api/post').then(res => {
        console.log(res.data)
        return res.data})
    return {
        type: GET_POST,
        payload: post
    }
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case GET_USER + '_FULFILLED':
            return {...state, user: payload}
        case GET_POST + '_FULFILLED': 
            return {...state, post: payload}
        default: 
            return state
    }
}