<template>
  <div>
    <div class="user-container">
      <user-profile :userInfo="questionItem">
        <router-link slot="name" :to="`/user/${questionItem.user}`">{{questionItem.user}}</router-link>
        <template slot="time">{{questionItem.time_ago}}</template>
      </user-profile>
      <section>
        <h2>{{questionItem.title}}</h2>
        <p v-html="questionItem.content"></p>
      </section>
    </div>
  </div>
</template>

<script>
import { UserProfile } from "../components";
export default {
  components: {
    UserProfile
  },
  computed: {
    questionItem() {
      return this.$store.state.item;
    }
  },
  created() {
    const { itemId } = this.$route.params;
    this.$store.dispatch("FETCH_ITEM", itemId);
  }
};
</script>

<style scoped>
.user-container {
  padding: 1rem;
}
</style>
