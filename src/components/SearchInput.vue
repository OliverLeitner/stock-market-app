<template>
  <div class="autocomplete-search">
    <input
      type="text"
      class="autocomplete-input"
      placeholder="testing 1 2 3"
      id="search-input"
      v-model="searchValue"
      @input="onChange();" />
    <div class="autocomplete-results-wrapper" v-show="!hidden && searchResults && searchResults.length > -1">
      <div
        v-for="(result, index) in searchResults"
        :key="index"
        class="autocomplete-results"
        @click="searchValue=result['1. symbol'].toLowerCase();getSingleResult(result, index)">
        <div class="autocomplete-result">{{ result["1. symbol"] }}</div>
        <div class="autocomplete-result">{{ result["2. name"] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import store from "../store" // look at main.js
// import ReturnedResults from '../components/ReturnedResults.vue' // subnesting, not needed in your case

export default {
  name: "Search",
  // components: { ReturnedResults }, // subnesting, not needed in your case
  data() {
    return {
      searchValue: "",
      searchResults: undefined,
      hidden: true,
      // result: undefined, // single result entry, not needed, we use this.$store
    };
  },
  methods: {
    onChange() {
      if (this.searchValue.length >= 2) {
        this.apiCall();
      }
    },
    apiCall() {
      const urlBase = `https://www.alphavantage.co/query`;
      const params = {
        function: "SYMBOL_SEARCH",
        keywords: this.searchValue,
        apikey: process.env.VUE_APP_ALPHA_VANTAGE_APIKEY,
      };
      axios
        .get(urlBase, { params })
        .then((res) => {
          console.log(res);
          this.hidden = false;
          this.searchResults = res.data.bestMatches;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getResults(param) {
      this.apiCall();
      console.log(param);
    },
    getSingleResult(result, index) {
      this.hidden = true
      console.log("hello this works " + index + " is " + result['2. name'])
      this.$store.commit("setResult", result) // write to global this.$store from main.js
      // this.result = result // no longer needed
      console.log(this.$store.getters.result) // probably better as mapgetters, but this works for now
    },
  },
};
</script>

<style lang="css" scoped>
.autocomplete-search {
  width: 300px;
  margin: 0 auto;
  position: relative;
}
.autocomplete-input {
  padding: 10px;
  width: 300px;
  border-radius: 2px;
  border: 1px solid black;
}

.autocomplete-results-wrapper {
  position: absolute;
}
.autocomplete-results {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  width: 300px;
  border: 1px solid grey;
  padding: 10px;
  background-color: lightgray;
  color: black;
}

.autocomplete-results:hover {
  background-color: gray;
  cursor: pointer;
}
</style>
