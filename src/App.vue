<template>
  <Header />
  <Main />
</template>

<script>
    import axios from 'axios'
    import Header from './components/Header.vue';
    import Main from './components/Header.vue'
    import Cards from './components/Cards.vue'
    
    export default {
      components: {
        Header,
        Main,
        Cards,
      },
      data() {
        return {

        }
      },      
      methods: {
        fetchCharacters() {

          axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',{
              params: {
              fname: search,
            }
            })
            .then((res) => {

            })
        }
      },
    }
</script>

<style lang="scss" >

</style>
