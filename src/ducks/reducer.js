import axios from 'axios'

const initialState = {
    user: {
        id: 0,
        username: '',
    }
}

const GET_USER = 'GET_USER'

export const getUser = async () => {
    let user = await axios.get('/auth/getUser').then (res => res.data)
    return {
        type: GET_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case GET_USER + '_FULFILLED':
            console.log(type)
            console.log(payload)
            return {...state, user: payload}
        default: 
            return state
    }
}