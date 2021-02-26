<template>
  <div class="container">
    <ul class="main" v-for="blog in blogs" :key="blog.title">
      <li>
        <h1>{{ blog.title }}</h1> 
        <main>
          <section>
            {{ blog.discription }}
          </section>
        </main>
         <!-- Accent-colored raised button with ripple -->
        <router-link to="/content" class="waves-effect waves-light btn"><i class="material-icons left">visibility</i>read more</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "how to do ..",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis
          aliquam ipsum sed dignissim. Sed ac accumsan odio. Vivamus tristique
          dignissim neque. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc cursus felis nec purus condimentum vestibulum. Donec
          mauris nisi, sollicitudin eget iaculis id, suscipit id odio.`,
          discription: 'Lorem ipsum dolor sit amet...',
        },
        {
          title: "how to do1 ..",
          content: "",
          discription: "...",
        },
        {
          title: "how to do2 ..",
          content: "",
          discription: "...",
        },
        {
          title: "how to do3 ..",
          content: "",
          discription: "...",
        },
        {
          title: "how to do1 ..",
          content: "",
          discription: "...",
        },
        {
          title: "how to do2 ..",
          content: "",
          discription: "...",
        },
        {
          title: "how to do3 ..",
          content: "",
          discription: "...",
        }
      ]
    };
  },
};
</script>

<style scoped>
.container {
}
h1 {
    margin: 0;
}
</style>
