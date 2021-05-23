<template>
  <div class="container">
    <ul class="main" v-for="blog in blogs" :key="blog.title">
      <li>
        <h3>{{ blog.title }}</h3> 
        <main>
          <section>
            {{ blog.discription }}
          </section>
        </main>
         <!-- Accent-colored raised button with ripple -->
        <router-link :to="{name:'blogDeails', params:{slug: blog.title}}">
         read more
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "java入门",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis
          aliquam ipsum sed dignissim. Sed ac accumsan odio. Vivamus tristique
          dignissim neque. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc cursus felis nec purus condimentum vestibulum. Donec
          mauris nisi, sollicitudin eget iaculis id, suscipit id odio.`,
          discription: 'Lorem ipsum dolor sit amet...',
        },
        {
          title: "Node入门 ..",
          content: "",
          discription: "...",
        },
        {
          title: "c++入门到入土..",
          content: "",
          discription: "...",
        },
        {
          title: "python精通",
          content: "",
          discription: "...",
        },
        {
          title: "JAVA EE实战",
          content: "",
          discription: "...",
        },
        {
          title: "webpack入门",
          content: "",
          discription: "...",
        },
        {
          title: "nwjs入门",
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
