import {createStore} from 'vuex'

const clearCart = () => {
    return { 
        cart:[]
    }
}

export default createStore({
    state:{ 
        fruits:null,
        cart:[],
    },
    getters:{
        FRUITS_CART_GETTER(state) {
            return state.cart
        }, 
        TOTAL_CALORIES_GETTER(state) {
            let total = 0
            for (let item of state.cart) {           
                total += item.nutritions.calories/100 * item.quantity                
            }
            return total
        },   
    },
    mutations: {
        GET_FRUITS_DATA(state, data) {
            state.fruits = data  
        },
        ADD_FRUIT(state, newFruit) {
            state.cart.push(newFruit)
        },
        REMOVE_FRUIT(state, selectedFruit) {
            state.cart.splice(state.cart.findIndex(fruit => fruit.id === selectedFruit.id),1)            
        },
        CLEAR_CART(state) {
            Object.assign(state.cart, clearCart())
        },  
        
    },
    actions:{
        getFruitsData({commit}, data) { 
            commit("GET_FRUITS_DATA", data);
        },
        addFruitToCart({commit}, newFruit) { 
            commit("ADD_FRUIT", newFruit);
        },
        removeFruitToCart({commit}, selectedFruit) { 
            commit("REMOVE_FRUIT", selectedFruit);
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
