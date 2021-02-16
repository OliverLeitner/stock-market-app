<template>
  <div class="home">
    <h1>Stock Market App</h1>
    <SearchInput />
    <ReturnedResults />
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue'
import ReturnedResults from '../components/ReturnedResults.vue'
export default {
  name: 'Home',
  components: {
    SearchInput,
    ReturnedResults
  }
}
</script>

<style scoped>

</style>
