<template>
  <div>
    <div id="nav">
      <link id="mainStyles" rel="stylesheet" media="screen" href="css/styles.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" media="screen" href="css/vendor.min.css" />

      <Header></Header>
      <router-link to="/">Home</router-link>
      <router-link to="/trade">trade</router-link>
            <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>


import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
export default {
  components: {
    Header,

    Footer,
  },
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
