<template>
  <div>
    <ul class="news-list">
      <li v-for="item in itemList" :key="item.id">
        <p class="points">{{item.points || 0 }}</p>
        <p>
          <router-link v-if="name==='ask'" :to="`item/${item.id}`">{{item.title}}</router-link>
          <a v-else :href="item.url">{{item.title}}</a>
          <br />
          <span class="extra-info">
            {{item.time_ago}} by
            <a
              v-if="name==='jobs'"
              :href="`https://${item.domain}`"
            >{{item.domain}}</a>
            <router-link v-else :to="`/user/${item.user}`">{{item.user}}</router-link>
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      required: false
    }
  },
  computed: {
    name() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}

.news-list li {
  padding: 1rem;
  border-bottom: 1px solid #000;
}

.points {
  float: left;
  padding-right: 1rem;
  color: grey;
}

.extra-info {
  font-size: 0.8rem;
}
</style>
