<template>
  <div>
    <!-- ON LOAD -->
    <div v-if="loading" class="ui segment">
      <div class="ui active dimmer">
        <div class="ui indeterminate text loader">Preparing The Regions</div>
      </div>
      <p></p>
    </div>

    <div v-else-if="loading === false && regions" class="regions">
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
          <div class="image">
            <img :src="countryRegions['' + region + ''][1].image" />
          </div>
          <div class="content">
            <a class="header">{{ region }}</a>
            <p>
              Total countries:
              {{ countryRegions['' + region + ''][0].countries.length }}
            </p>
            <!--  -->
            <!--  -->
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
  name: 'Regions',
  data() {
    return {
      countries: [],
      loading: false,
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
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
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
      groups.Asia = [
        ...groups.Asia,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Asia'
          ),
        },
      ];
      //       europe countries
      groups.Europe = [
        ...groups.Europe,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Europe'
          ),
        },
      ];

      //       americas countries
      groups.Americas = [
        ...groups.Americas,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Americas'
          ),
        },
      ];

      //       Polar countries
      groups.Polar = [
        ...groups.Polar,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Polar'
          ),
        },
      ];

      //       Oceania countries
      groups.Oceania = [
        ...groups.Oceania,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Oceania'
          ),
        },
      ];

      //       Africa countries
      groups.Africa = [
        ...groups.Africa,
        {
          countries: this.countries.filter(
            (country) => country.region === 'Africa'
          ),
        },
      ];
      //       background images
      groups.Asia = [
        ...groups.Asia,
        {
          image: 'https://geology.com/world/map/map-of-asia.gif',
        },
      ];
      groups.Europe = [
        ...groups.Europe,
        {
          image: 'https://ontheworldmap.com/europe/europe-location-map.jpg',
        },
      ];
      groups.Africa = [
        ...groups.Africa,
        {
          image: 'https://ontheworldmap.com/africa/africa-location-map.jpg',
        },
      ];
      groups.Oceania = [
        ...groups.Oceania,
        {
          image: 'https://ontheworldmap.com/oceania/oceania-location-map.jpg',
        },
      ];

      groups.Americas = [
        ...groups.Americas,
        {
          image:
            'https://geology.com/world/united-states-map-with-state-names.gif',
        },
      ];
      groups.Polar = [
        ...groups.Polar,
        {
          image: 'https://geology.com/world/arctic-ocean-map.gif',
        },
      ];

      return groups;
    },
  },
};
</script>

<style>
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
