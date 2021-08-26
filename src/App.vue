<template>
  <div id="app">
    <Nav />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
//
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content-wrapper {
  width: calc(100% -15rem);
  margin-left: 15rem;
  padding: 2rem;
}
@media screen and (max-width: 1200px) {
  .content-wrapper {
    width: 100%;
    margin-left: 0px;
  }
}
</style>
