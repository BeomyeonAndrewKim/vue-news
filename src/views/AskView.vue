<template>
  <div>
    ASK
    <p v-for="ask in fetchedAsks">
      <router-link :to="`item/${ask.id}`">{{ask.title}}</router-link>
      <small>{{ask.time_ago}}</small>
      <small>{{ask.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsks"])
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style>
</style>
