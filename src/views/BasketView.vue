<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 style="font-weight: bold; text-align: center">FOOD ORDER</h2>
        <div class="table-responsive mt-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Order</th>
                <th scope="col">Order Request</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(basket, index) in baskets" :key="basket.id">
                <th>{{ index + 1 }}</th>
                <td>
                  <img
                    :src="'/img/' + basket.product.gambar"
                    class="img-fluid shadow"
                    width="200"
                  />
                </td>
                <td>{{ basket.product.nama }}</td>
                <td>{{ basket.order_request ? basket.order_request : "-" }}</td>
                <td>{{ basket.order_quantity }}</td>
                <td>Rp. {{ basket.product.harga }}</td>
                <td>Rp. {{ basket.product.harga * basket.order_quantity }}</td>
                <td class="edit-icon">
                  <router-link :to="'/edit/' + basket.id"><b-icon-textarea-t /></router-link>
                </td>
                <td class="delete-icon">
                  <b-icon-trash @click="DeleteBasket(basket.id)" />
                </td>
              </tr>
              <tr>
                <td colspan="6" style="text-align: right">Total Price :</td>
                <td>{{ totalPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BasketView",

  data() {
    return {
      baskets: [],
    };
  },

  methods: {
    SetBasket(data) {
      this.baskets = data;
    },

    DeleteBasket(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() =>
          // handle success
          this.$notify({ type: "error", text: "Delete Item", duration: "1000" })
        )
        .catch((error) =>
          // handle error
          console.log(error)
        );
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) =>
        // handle success
        this.SetBasket(response.data)
      )
      .catch((error) =>
        // handle error
        console.log(error)
      );
  },

  computed: {
    totalPrice() {
      return this.baskets?.reduce(function (items, data) {
        return items + data.product.harga * data.order_quantity;
      }, 0);
    },
  },
};
</script>

<style scoped>
.table td {
  font-weight: bold;
  text-align: center;
}

.edit-icon {
  color: rgb(192, 163, 0);
}

.delete-icon {
  color: red;
}
</style>