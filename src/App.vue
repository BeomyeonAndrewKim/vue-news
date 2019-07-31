<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { ToolBar } from "./components";
export default {
  components: {
    ToolBar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
