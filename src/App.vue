<template>
  <div id="app">
    <Nav />
    <div class="content-wrapper"></div>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
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
  width: 100%;
  height: 100vh;
  margin-left: 15rem;
  background: pink;
}
</style>
