<template>
  <footer class="mt-5 mb-5">
    <hr />
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-4 mt-4 text-center">
          <a class="footer-brand" href="/"><b-icon-egg-fried/> BURJO</a>
        </div>
        <div class="col-md-4 mt-4 text-center"><small class="footer-rights">BURJO © 2022</small></div>
        <div class="col-md-4 mt-4 text-center">
            <ul class="icon">
                <li><a href="/facebook"><b-icon-facebook /></a></li>
                <li><a href="/instagram"><b-icon-instagram /></a></li>
                <li><a href="/youtube"><b-icon-youtube /></a></li>
            </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
    .footer-brand {
        color: #42b983;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
    }

    .footer-brand:hover,
    a:hover {
        color: #42a578;
        list-style: none;
        text-decoration: none;
    }

    .footer-rights {
        color: rgba(0, 0, 0, 0.5);
        font-weight: bold;
    }

    .icon {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        font-size: 24px;
        color: #42b983;
    }

    a {
        cursor: pointer;
        color: #42b983;
     }

</style>