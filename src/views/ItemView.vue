<template>
  <div>
    <div class="user-container">
      <section>
        <div class="user-description">
          <router-link :to="`/user/${questionItem.user}`">{{questionItem.user}}</router-link>
          <div>{{questionItem.time_ago}}</div>
        </div>
      </section>
      <section>
        <h2>{{questionItem.title}}</h2>
        <p v-html="questionItem.content"></p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
