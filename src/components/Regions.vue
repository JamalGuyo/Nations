<template>
  <div class="regions">
    <div class="link">
      <div class="ui breadcrumb">
        <a class="section">Home</a>
        <i class="right angle icon divider"></i>
        <a class="active section">Regions</a>
      </div>

      <div class="summary">
        <p>Total : {{ regions.length }}</p>
      </div>
    </div>
    <div class="c-grid">
      <div class="ui card" v-for="(region, index) in regions" :key="index">
        <!--  -->
        <div class="content">
          <a class="header">{{ region }}</a>
          <p>Total countries: {{ countryRegions['' + region + ''].length }}</p>
          <!--  -->
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'Regions',
  props: {
    countries: {
      type: Array,
    },
  },
  computed: {
    regions() {
      let regions = [];
      this.countries.forEach((country) => {
        if (country.region) {
          regions.push(country.region);
        }
      });
      return [...new Set([...regions])];
    },
    countryRegions() {
      const groups = {
        Asia: [],
        Europe: [],
        Americas: [],
        Polar: [],
        Oceania: [],
        Africa: [],
      };
      //      asian countries
      groups.Asia = this.countries.filter(
        (country) => country.region === 'Asia'
      );
      //       europe countries
      groups.Europe = this.countries.filter(
        (country) => country.region === 'Europe'
      );

      //       americas countries
      groups.Americas = this.countries.filter(
        (country) => country.region === 'Americas'
      );

      //       Polar countries
      groups.Polar = this.countries.filter(
        (country) => country.region === 'Polar'
      );

      //       Oceania countries
      groups.Oceania = this.countries.filter(
        (country) => country.region === 'Oceania'
      );

      //       Africa countries
      groups.Africa = this.countries.filter(
        (country) => country.region === 'Africa'
      );

      return groups;
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
