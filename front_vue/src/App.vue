<template>
  <div>
    <div id="nav">
      <router-view></router-view>
      <Header></Header>
      <router-link to="/">Home</router-link>
      <router-link to="/trade">trade</router-link>
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
