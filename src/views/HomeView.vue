<template>
  <div class="home">
    <!-- <NavbarComp /> -->
    <div class="container">
      <HeroComp />
      <div class="row mt-4">
        <div class="col mt-4">
          <h2><strong>Best Foods</strong></h2>
        </div>
        <div class="col mt-4">
          <router-link
            to="/foods"
            class="btn btn-success float-right"
            ><b-icon-eye /> View All</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavbarComp from "@/components/NavbarComp.vue";
import HeroComp from "@/components/HeroComp.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    // NavbarComp,
    HeroComp,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    SetProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
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
.btn-success {
  background: #4eb883;
  border-color: #4eb883;
}

.btn-success:hover {
  color: #4eb883;
  background-color: #fff;
  border: 1px solid #4eb883;
}
</style>
