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
  props: ["result"],
  computed: {
  storeData: function() {
   console.log(this.$store.state);
   return this.$store.state.result;
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
