<template>
  <div class="country-detail">
    <!-- ON LOAD -->
    <div v-if="loading" class="ui segment">
      <div class="ui active dimmer">
        <div class="ui indeterminate text loader">Preparing Files</div>
      </div>
      <p></p>
    </div>
    <!-- COUNTRY DATA -->
    <div v-else-if="loading === false && country" class="ui card">
      <div class="content">
        <h1 class="left floated ">{{ country.name }}</h1>
        <div class="right floated meta">
          <img class="ui avatar img" :src="country.flag" />
        </div>
      </div>
      <div class="content">
        <iframe
          :src="
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyBcWB_ETh_Tml87sML8pj6-1Cw3eqj4n44&q=' +
              country.latlng +
              '&zoom=5'
          "
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
      <!--  -->
      <div class="content">
        <div class="ui sub header">
          Information
        </div>
        <div class="ui small feed">
          <p>
            <b> <i class="fas fa-city"></i> Capital : </b>
            {{ country.capital }}
          </p>
          <p>
            <b><i class="fas fa-users"></i> Population:</b>
            {{ country.population }}
          </p>
          <p>
            <b><i class="fas fa-language"></i> Languages:</b>
            {{ country.languages.length }}
          </p>
          <p>
            <b><i class="fas fa-money-bill-alt"></i> Currency:</b>
            {{ country.currencies[0].name }} <b>symbol:</b>
            {{ country.currencies[0].symbol }}
            <b>
              Code:
            </b>
            {{ country.currencies[0].code }}
          </p>
          <p>
            <b><i class="fas fa-map-marked-alt"></i> Region:</b>
            {{ country.region }}
          </p>
          <p>
            <b><i class="fas fa-thumbtack"></i> Sub-Region:</b>
            {{ country.subregion }}
          </p>
          <p>
            <b><i class="fas fa-clock"></i> timezones:</b>
            {{ country.timezones }}
          </p>
        </div>
      </div>
      <div class="content">
        <div class="ui sub header">
          <div class="floated right">
            Validate Phone Number
            <img class="ui avatar img" :src="country.flag" />
          </div>
        </div>
        <div class="ui small feed">
          <form class="ui form">
            <div class="field">
              <input
                type="number"
                :placeholder="country.callingCodes + '...'"
                max="10"
                min="10"
                required
              />
            </div>
            <button type="submit" class="ui mini basic button green">
              validate
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetail',
  data() {
    return {
      loading: false,
      country: [],
      countryName: '',
    };
  },
  created() {
    this.countryName = this.$route.params.name;
    this.fetchData();
  },
  methods: {
    fetchData() {
      //
      this.loading = true;
      // method to fetch countries
      let url = `https://restcountries.eu/rest/v2/name/${this.countryName}`; // define url

      axios
        .get(url)
        .then((res) => {
          // axios will get data from url then return data
          this.country = res.data[0]; // takes data from api and fills it in countries[]
          console.log(this.country);
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
.ui.card .avatar img,
.ui.card img.avatar,
.ui.cards > .card .avatar img,
.ui.cards > .card img.avatar {
  width: 2em !important;
  height: 2em !important;
  border-radius: 500rem;
}
.ui.active.dimmer {
  height: 90vh !important;
}
.ui.card {
  width: 100%;
}
.header img {
  width: 200px;
}
.form {
  align-items: center;
}
button {
  margin: 0 1rem !important;
}
</style>
