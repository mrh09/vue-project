<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-6">
        <img
          v-if="drink.gambar"
          :src="'/img/' + drink.gambar"
          class="img-fluid shadow"
        />
      </div>
      <div class="col-md-6">
        <h2>{{ drink.nama }}</h2>
        <hr />
        <h4>Price : Rp. {{ drink.harga }}</h4>
        <form class="mt-4" v-on:submit.prevent>
          <div class="form-group">
            <label for="order_quantity">Quantity</label>
            <input
              type="number"
              class="form-control"
              v-model="order.order_quantity"
            />
          </div>
          <div class="form-group">
            <label for="order_request">Order Request</label>
            <textarea
              class="form-control"
              placeholder="any request.."
              v-model="order.order_request"
            />
          </div>
          <button class="btn btn-success" @click="Ordering">
            <b-icon-cart /> Order Now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DrinkdetailView",

  data() {
    return {
      drink: {},
      order: {},
    };
  },
  methods: {
    SetDrinks(data) {
      this.drink = data;
    },
    Ordering() {
      this.order.drink = this.drink;
      if(this.order.order_quantity) {
        axios
        .post("http://localhost:3000/keranjangs", this.order)
        .then(() => {
            this.$router.push({ path: "/basket" })
            this.$notify({   
            type: "success", 
            text: "Adding Order", 
            duration: "1000" 
        })
        })
        .catch((error) => console.log(error));
      } else {
        this.$notify(
        {   type: "error", 
            text: "Please Add Quantity", 
            duration: "1000" 
        })
      }
     
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/drinks/" + this.$route.params.id)
      .then((response) =>
        // handle success
        this.SetDrinks(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },
};
</script>

<style scoped>
h2,
h4 {
  font-weight: bold;
}

.btn-success {
  background-color: #4eb883;
  border-color: #4eb883;
}

.btn-success:hover {
  color: #4eb883;
  background-color: #fff;
  border: 1px solid #4eb883;
}

.img-fluid {
  border-radius: 15px;
}
</style>