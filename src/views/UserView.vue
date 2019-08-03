<template>
  <div>
    <user-profile :userInfo="userInfo">
      <template slot="name">{{userInfo.id}}</template>
      <template slot="time">Joined {{userInfo.created}}</template>
      <span slot="karma">, {{userInfo.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import { UserProfile } from "../components";
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const { username } = this.$route.params;
    this.$store.dispatch("FETCH_USER", username);
  }
};
</script>

<style>
</style>
