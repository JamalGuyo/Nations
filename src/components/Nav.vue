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
      <a class="item"> Countries <i class="far fa-flag"></i> </a>
      <a class="item"> Regions <i class="fas fa-globe-africa"></i> </a>
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
