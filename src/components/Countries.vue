<template>
  <div class="countries">
    <div class="link">
      <div class="ui breadcrumb">
        <a class="section">Home</a>
        <i class="right angle icon divider"></i>
        <a class="active section">Countries</a>
      </div>

      <div class="summary">
        <p>Total : {{ countries.length }}</p>
      </div>
    </div>
    <div class="c-grid">
      <div class="ui card" v-for="(country, index) in countries" :key="index">
        <!--  -->
        <div class="image">
          <img :src="country.flag" />
        </div>
        <div class="content">
          <a class="header">{{ country.name }}</a>
          <div class="meta">
            <span class="date">Capital City: {{ country.capital }}</span>
            <span class="date">Region: {{ country.region }}</span>
            <span class="date">Timezone: {{ country.timezones }}</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="far fa-eye"></i>
            See more
          </a>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'Countries',
  props: {
    countries: {
      type: Array,
    },
  },
};
</script>

<style>
.c-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: baseline;
}
.ui.card {
  height: 21rem !important;
}
.image {
  max-height: 10rem !important;
  background: pink;
}
img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
}
.link {
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
}
.link .nav a,
.link .summary p {
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}
.meta {
  display: flex;
  flex-direction: column;
}
</style>
