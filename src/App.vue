<template>
  <div id="app">
    <Nav />
    <div class="content-wrapper">
      <!-- <Countries :countries="countries" /> -->
      <Country :country="countries[78]" :loading="loading" />
      <!-- <Regions :countries="countries" /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav';
// import Countries from './components/Countries';
import Country from './components/CountryDetail';
// import Regions from './components/Regions';

export default {
  name: 'App',
  components: {
    Nav,
    // Countries,
    Country,
    // Regions,
  },
  data() {
    return {
      loading: false,
      countries: [],
    };
  },
  methods: {},
  mounted() {
    //
    this.loading = true;
    // method to fetch countries
    let url = 'https://restcountries.eu/rest/v2/all'; // define url
    axios
      .get(url)
      .then((res) => {
        // axios will get data from url then return data
        this.countries = res.data; // takes data from api and fills it in countries[]
      })
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
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
  width: calc(100% -15rem);
  margin-left: 15rem;
  padding: 2rem;
}
</style>
