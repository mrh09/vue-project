<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-6">
        <h2 style="font-weight: bold;">Drinks</h2>
      </div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Search Drink.."
            aria-label="Search Drink.."
            aria-describedby="basic-addon1"
            @keyup="SearchDrink"
          />
          <span class="input-group-text" id="basic-addon1"><b-icon-search /></span>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-3 mt-4" v-for="drink in drinks" :key="drink.id">
        <CardDrink :drink="drink" />
      </div>
    </div>
  </div>
</template>

<script>

import CardDrink from "@/components/CardDrink.vue";
import axios from "axios";
// @ is an alias to /src


export default {
  name: 'DrinkView',
  components: {
    CardDrink
  },
  data() {
    return {
      drinks: [],
      search:''
    };
  },
  methods: {
    SetDrinks(data) {
      this.drinks = data;
    },
    SearchDrink() {
      axios
      .get("http://localhost:3000/drinks?q="+this.search)
      .then((response) =>
        // handle success
        this.SetDrinks(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/drinks")
      .then((response) =>
        // handle success
        this.SetDrinks(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
}
</script>

<style scoped>

.input-group-text {
  color: #fff;
  background-color: #4eb883;
  border-color: #4eb883;
  margin-left: 5px;
}

.input-group-text:hover {
  cursor: pointer;
  background-color: #42a578;
}

</style>