<template>
  <div class="ui left fixed vertical menu">
    <div class="item">
      <h1>
        Nations App
      </h1>
    </div>

    <div class="item">
      <router-link class="item" to="/countries">
        Countries <i class="far fa-flag"></i>
      </router-link>
      <router-link class="item" to="/regions">
        Regions <i class="fas fa-globe-africa"></i>
      </router-link>
      <router-link class="item" to="/phonevalidation">
        Phone Validation <i class="fas fa-phone"></i
      ></router-link>
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
router-link:hover {
  color: rgba(0, 0, 255, 0.2) !important;
}
/*  */
a.item.router-link-exact-active.router-link-active {
  color: #4183c4 !important;
  cursor: pointer !important;
}
/*  */
@media screen and (max-width: 1200px) {
  .menu {
    position: relative !important;
    display: flex !important;
    align-items: center;
    width: 100% !important;
  }
  .item {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: none !important;
  }
  .item:before {
    background: none !important;
  }
  .item i {
    margin: 0 5px;
  }
}
</style>
