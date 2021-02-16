<template>
  <div class="returned-results" v-show="result">
    <section>
      {{result}}
    </section>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["result"]
};
</script>

<style lang="css" scoped>
.returned-results {
  position: relative;
  z-index: -1;
}
</style>
