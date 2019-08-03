<template>
  <div>
    <div class="user-container">
      <div class="user-description">
        <div>
          name:
          <slot name="name"></slot>
        </div>
        <div>
          <slot name="time"></slot>
          <slot name="karma"></slot>
        </div>
      </div>
      <p v-html="userInfo.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped>
.user-container {
  padding: 1rem;
}
</style>
