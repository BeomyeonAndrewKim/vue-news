<template>
  <div>
    ASK
    <div v-for="ask in askList">{{ask}}</div>
  </div>
</template>

<script>
import { fetchAsksList } from "../api";
export default {
  data() {
    return {
      askList: []
    };
  },
  created() {
    fetchAsksList().then(response => (this.askList = response.data));
  }
};
</script>

<style>
</style>
