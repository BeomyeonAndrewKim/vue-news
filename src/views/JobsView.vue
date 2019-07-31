<template>
  <item-list :itemList="fetchedJobs"></item-list>
</template>

<script>
import { mapGetters } from "vuex";
import { ItemList } from "../components";
export default {
  components: {
    ItemList
  },
  computed: {
    ...mapGetters(["fetchedJobs"])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
</style>
