<template>
  <div class="hero">
    <!-- Dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>We Deserve, </strong><br />A Delicious Menu</h2>
              <p>Let's eat your favorit food</p>
              <router-link
                class="btn btn-lg btn-success"
                to="/foods"
              >
                Order Now
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../../public/img/ilustrasi.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <img src="../../public/img/ilustrasi.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>We Deserve, </strong><br />A Delicious Menu</h2>
              <p>Let's eat your favorit food</p>
              <button
                class="btn btn-lg btn-success"
               to="/foods"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComp",
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
  border: 2px solid #4eb883;
}
</style>