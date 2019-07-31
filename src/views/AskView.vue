<template>
  <item-list :itemList="fetchedAsks"></item-list>
</template>

<script>
import { mapGetters } from "vuex";
import { ItemList } from "../components";
export default {
  components: {
    ItemList
  },
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
