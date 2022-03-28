<template>
  <div id="app">
    <NavbarComp :key="$route.fullPath"/>
    <notifications classes="my-style" position="top center"/>
    <router-view/>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue"
import FooterComp from "@/components/FooterComp.vue"

export default {
  components: {
    NavbarComp,
    FooterComp
  },
}
</script>

<style lang="scss">
.my-style {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  color: #fff;
  background: #2d93fa;
  border: 1px solid #D4E8FD;
  text-align: center;
 
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
 
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}

</style>
