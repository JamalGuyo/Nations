<template>
  <div class="ui left fixed vertical menu">
    <div class="item">
      <h1>
        Location App
      </h1>
    </div>
    <div class="item">
      <div class="ui input">
        <input type="text" placeholder="Search a country..." />
      </div>
    </div>
    <div class="item">
      <router-link class="item" to="/countries">
        Countries <i class="far fa-flag"></i>
      </router-link>
      <router-link class="item" to="/regions">
        Regions <i class="fas fa-globe-africa"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>
.menu {
  height: auto !important;
  margin-right: 15rem;
}
a.item {
  display: flex !important;
  justify-content: space-between;
}
</style>
