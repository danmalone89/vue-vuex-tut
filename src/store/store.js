import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // registers this plugin with Vue

export const store = new Vuex.Store({
    // state and getters are reserved words
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: { // Mutations must always be synchronous or else it's useless for state
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    }
})