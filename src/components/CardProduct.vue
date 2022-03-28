<template>
  <div class="card shadow card-product">
    <img
      :src="'/img/' + product.gambar"
      class="card-img"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ product.nama }}</strong>
      </h5>
      <p class="card-text">Price : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success" :to="'/fooddetail/' + product.id"><b-icon-cart /> Order </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style scoped>
.btn-success {
  background-color: #4eb883;
  border-color: #4eb883;
}

.btn-success:hover {
  color: #4eb883;
  background-color: #fff;
  border: 1px solid #4eb883;
}

.card-product {
  border-radius: 15px;
}

.card-img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 165px;
}
</style>>
  