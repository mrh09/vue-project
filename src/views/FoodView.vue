<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-6">
        <h2 style="font-weight: bold">Foods</h2>
      </div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Search Food.."
            aria-label="Search Food.."
            aria-describedby="basic-addon1"
            @keyup="SearchFood"
          />
          <span class="input-group-text" id="basic-addon1"><b-icon-search /></span>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "FoodView",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: ''
    };
  },
  methods: {
    SetProducts(data) {
      this.products = data;
    },
    SearchFood() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) =>
        // handle success
        this.SetProducts(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) =>
        // handle success
        this.SetProducts(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
};
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