import {createStore} from 'vuex'

const getDefaultState = () => {
    return { 
        user:null,
        token:null,
    }
}

export default createStore({
    state:{ 
        fruits:null,
        cart:null,
    },
    getters:{
        IS_USER_AUTHENTICATE_GETTER(state) {
            return state.token !== null
        },
        IS_USER_ISADMIN_GETTER(state) {
            return state.user !== null && state.user.isAdmin
        },
        GET_USER_DATA_GETTER(state) {
            return state.user
        },         
    },
    mutations: {
        GET_FRUITS_DATA(state, data) {
            state.fruits = data
            console.log(state.fruits)   
        },
        ADD_FRUIT(state, fruit) {
            state.cart = fruit
            console.log(state.cart)   
        },
        RESET_STATE(state) {
            Object.assign(state, getDefaultState())
        },  
        
    },
    actions:{
        getFruitsData({commit}, data) { 
            commit("GET_FRUITS_DATA", data);
        },
        addFruitToCart({commit}, fruit) { 
            commit("ADD_FRUIT", fruit);
        },
        getFruitData({commit}, data) { 
            commit("UPDATE_STATE", data);
            const expiredTimestamp = (new Date()).getTime() + 24*60*60*1000 // current timestamp + 24h
            const expiredDate = new Date(expiredTimestamp)
            setCookie('userData', JSON.stringify(data),expiredDate); 
        },
        resetState({ commit }) {            
            commit('RESET_STATE')
            deleteCookie('userData')
            
        },       
    }
  })
