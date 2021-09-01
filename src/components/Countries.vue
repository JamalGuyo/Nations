<template>
  <div>
    <!-- ON LOAD -->
    <div v-if="loading" class="ui segment">
      <div class="ui active dimmer">
        <div class="ui indeterminate text loader">Preparing The Nations</div>
      </div>
      <p></p>
    </div>
    <div v-else-if="loading === false && filteredCountries" class="countries">
      <div class="ui">
        <form class="ui form">
          <div class="item">
            <input
              type="text"
              placeholder="search country..."
              @input="handleSearch"
              v-model="inputSearch"
            />
          </div>
          <div class="item sort">
            <p>
              Sort By Population:
            </p>
            <p>
              <a class="sort-btn" @click="sortByHighest"
                ><i class="fas fa-sort-numeric-down-alt"></i> Highest to
                lowest</a
              >

              <a class="sort-btn" @click="sortByLowest"
                ><i class="fas fa-sort-numeric-down"></i> Lowest to highest</a
              >
            </p>
          </div>
        </form>
      </div>
      <div class="link">
        <div class="ui breadcrumb">
          <a class="section">Home</a>
          <i class="right angle icon divider"></i>
          <a class="active section">Countries</a>
        </div>

        <div class="summary">
          <p>Total : {{ filteredCountries.length }}</p>
        </div>
      </div>
      <div class="c-grid">
        <div
          class="ui card"
          v-for="(country, index) in filteredCountries"
          :key="index"
        >
          <!--  -->
          <div class="image">
            <img :src="country.flag" />
          </div>
          <div class="content">
            <a class="header">{{ country.name }}</a>
            <div class="meta">
              <span>Capital City: {{ country.capital }}</span>
              <span>Region: {{ country.region }}</span>
              <span>Timezone: {{ country.timezones }}</span>
            </div>
          </div>
          <div class="extra content">
            <router-link
              :to="{ name: 'country', params: { name: country.name } }"
            >
              <i class="far fa-eye"></i>
              See more
            </router-link>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Countries',
  data() {
    return {
      countries: [],
      filteredCountries: [],
      loading: false,
      inputSearch: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //
      this.loading = true;
      // method to fetch countries
      let url = 'https://restcountries.eu/rest/v2/all'; // define url
      axios
        .get(url)
        .then((res) => {
          // axios will get data from url then return data
          this.countries = res.data; // takes data from api and fills it in countries[]
          this.filteredCountries = this.countries;
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    handleSearch(e) {
      this.filteredCountries = this.countries.filter((country) =>
        new RegExp(e.target.value, 'i').exec(country.name)
      );
    },
    sortByHighest() {
      //
      this.filteredCountries = this.filteredCountries
        .slice(0)
        .sort((a, b) => b.population - a.population);
    },
    sortByLowest() {
      this.filteredCountries = this.filteredCountries
        .slice(0)
        .sort((a, b) => a.population - b.population);
    },
  },
  computed: {},
};
</script>

<style scoped>
.ui.active.dimmer {
  height: 90vh !important;
}
.c-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: baseline;
}
.ui.card {
  height: 21rem !important;
}
.meta span {
  color: rgba(0, 0, 0, 0.4) !important;
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
.sort {
  display: flex;
  padding: 20px 0;
}
.sort-btn {
  cursor: pointer;
  box-shadow: 1px 0 3px gray;
  padding: 12px 18px;
  background: white;
  margin: 5px;
  transition: 0.5s;
}
.sort-btn:hover {
  box-shadow: none;
  background: rgba(0, 0, 0, 0.3);
  color: black;
}

@media screen and (max-width: 1200px) {
  .c-grid {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ui.card {
    margin-right: 10px !important;
  }
}
</style>
