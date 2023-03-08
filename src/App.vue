<template>
  <Header @fetchData="fetchData"/>
  <Main />
</template>

<script>
    import axios from 'axios'
    import Header from './components/Header.vue';
    import Main from './components/Main.vue'
    import store from './store'

    
    export default {
      components: {
        Header,
        Main,
        store

      },
      data() {
        return {
          store
        }
      },      
      methods: {
        fetchData() {
          this.fetchMovies();
          this.fetchSeries();
        },
        fetchMovies() {
          axios.get('https://api.themoviedb.org/3/search/movie?',{
            params: {
              api_key: 'e99307154c6dfb0b4750f6603256716d',
              language: 'it_IT',
              query: this.store.search,
            }
          })
          .then(res => {
            console.log(res.data.results)
            this.store.movies = res.data.results
          }).catch(err =>{
            this.store.movies = []
          })
          
        },
        fetchSeries() {
          axios.get('https://api.themoviedb.org/3/search/tv?', {
            params: {
              api_key: 'e99307154c6dfb0b4750f6603256716d',
              language: 'it_IT',
              query: this.store.search,
            }
          })
          .then(res => {
            console.log(res.data.results)
            this.store.series = res.data.results
          }).catch(err => {
            this.store.series = []
          })
        }
      }
    }
</script>

<style lang="scss" >
  @use './style/general.scss';

</style>
