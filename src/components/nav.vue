<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <li style="font-size: 25px">{{ getMood() }}</li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/write">Write</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      mood: [
        '😀','🥰','🍅'
      ],
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    getMood() {
      return this.mood[this.getRandomInt(this.mood.length)]
    }
  }

}
</script>

<style scoped>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
</style>
