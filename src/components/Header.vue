<template>
    <div class="container">
        <div class="header_section">
            <input class="search" type="text" v-model="store.search" placeholder="Filter by name">
            <button class="header_button" @click="$emit('fetchMovies')">
                Cerca
            </button>
        </div>
    </div>
  </template>
  
  <script>
    import store from '../store'
    export default {
        data() {
        return {
            store,
        }
        },
        methods: {
        search() {
            console.log(search)
        }
        }
    }
  </script>

  
<style lang="scss" scoped>

    .container{
        margin-top: 20px;
    }

    .search{
        width: 300px;
        height: 40px;
        background-color: gray;
        color: white;
        margin-right: 20px;
    }
    .search::placeholder{
        color: white;
    }
    .header_button{
        width: 60px;
        height: 40px;
        background-color: darkturquoise;
    }

</style>