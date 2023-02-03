<template>
  <div id="app">

    <Header />
    <div class="justify-content-center align-items-center">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  // import Loading from "./components/Preloader.vue";<loading ref="loading" v-if="isLoading" />
  export default {
    components: {
      Header,
      Footer,
      // Loading
    },
    data: () => ({
      isLoading: true
    }),
    // mounted() {
    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 6500);

    // },
  }
</script>
