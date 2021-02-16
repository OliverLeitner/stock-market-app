import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    results: undefined,
    error: undefined,
    result: undefined
  },
  getters: {
    results: (state) => state.results,
    error: (state) => state.error,
    result: state => {return state.result}
  },
  mutations: {
    setResults(state, payload) {
      state.results = payload;
    },
    setResult(state, payload) {
      state.result = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
});
export default store