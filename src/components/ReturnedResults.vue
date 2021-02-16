<template>
  <div class="returned-results" v-show="storeData">
    <section>
      {{storeData}}
    </section>
  </div>
</template>

<script>
export default {
  name: "Result",
  // props: ["result"], // not needed, we use this.$store from main.js
  computed: { // when this.$store containes our result...
    storeData: function() {
      console.log(this.$store.state); // mapgetters would be better, but this works too...
      return this.$store.state.result; // we want store data to be returned, so we ... return
    }
  }
}
</script>

<style lang="css" scoped>
.returned-results {
  position: relative;
  z-index: -1;
}
</style>
