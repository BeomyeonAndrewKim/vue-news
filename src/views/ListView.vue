<template>
  <div>
    <list-item :itemList="itemList"></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ItemList";
export default {
  components: {
    ListItem
  },
  computed: {
    itemList() {
      return this.$store.state.list;
    }
  }
};
</script>

<style>
</style>
