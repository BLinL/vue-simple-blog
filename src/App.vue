<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="transitionName">
      <div class="container">
        <router-view />
      </div> 
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
};
</script>

<style scoped>
#app {
  font-family: GillSans, Calibri, Trebuchet, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

html {
  font-family: GillSans, Calibri, Trebuchet, sans-serif;
}

.container {
  margin-top: 120px;
}
</style>
