<template>
  <div>
    Jobs
    <div v-for="job in jobList">{{job}}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api";
export default {
  data() {
    return {
      jobList: []
    };
  },
  created() {
    fetchJobsList().then(response => (this.jobList = response.data));
  }
};
</script>

<style>
</style>
