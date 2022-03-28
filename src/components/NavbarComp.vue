<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/"><b-icon-egg-fried /> BURJO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/drinks">Drinks</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/basket">
              Basket
              <b-icon-bag />
              <span class="badge badge-success ml-1" style="background: #42b983"
                >{{ order_quantities.length }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComp",
  data() {
    return {
      order_quantities: []
    }
  },

  methods: {
    setQuantity(data) {
      this.order_quantities = data
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) =>
        // handle success
        this.setQuantity(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  }
};
</script>

<style scoped>
.navbar-brand {
  color: #42b983;
  font-weight: bold;
}

.nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-brand:hover {
  color: #42a578;
  list-style: none;
  text-decoration: none;
}
</style>