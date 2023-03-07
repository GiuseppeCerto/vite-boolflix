<template>
    <div class="container">
        <div v-for="cards in cards" :key='card.id'>

        </div>
    </div>
  </template>
  
  <script>
    import store from '../store'
    import Character from './Character.vue'
    import Filter from './Filter.vue'
    export default {
      components: {
        Character,
        Filter,
      },
      data() {
        return {
          store,
        }
      },
      computed: {
        characters() {
          return this.store.characters
        }
      },
      methods: {
        fetchCharacters() {
          const search = this.store.search
          axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',{
              params: {
              fname: search,
            }
            })
            .then((res) => {
              this.store.characters = res.data.data
            })
        }
      },
      created() {
        this.fetchCharacters()
      },
    }

  </script>
  
  <style lang="scss" scoped>
  @use './style/general.scss';
  </style>