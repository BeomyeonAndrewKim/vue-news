<template>
  <item-list :itemList="fetchedNews" topic="news"></item-list>
</template>

<script>
import { mapGetters } from "vuex";
import { ItemList } from "../components";
export default {
  components: {
    ItemList
  },
  computed: {
    ...mapGetters(["fetchedNews"])
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style>
</style>
