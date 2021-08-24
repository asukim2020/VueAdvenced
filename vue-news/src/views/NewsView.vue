<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news">{{ user.title }}</div> -->

    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
}
</script>

<style>

</style>