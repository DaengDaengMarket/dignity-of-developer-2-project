<template>
  <div>
    <Header />
    <router-view />
    <Footer />
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

</style>