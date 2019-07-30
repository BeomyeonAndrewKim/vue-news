<template>
  <div>
    NEWS
    <div v-for="news in newsList">{{news}}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    fetchNewsList().then(response => (this.newsList = response.data));
  }
};
</script>

<style>
</style>
