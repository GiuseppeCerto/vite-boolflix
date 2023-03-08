<template>
    <div class="container">
        <ul class="movie_items">
            <li v-for="movie in store.movies" :key="movie.id">
                <img :src="store.imageUrl + movie.poster_path" alt="#">
                <h3>{{ movie.title }}</h3>
                <h5>{{ movie.original_title }}</h5>
                <img :src="getFlagIcon(movie.original_language)" alt="#">
                <p>{{ movie.original_language }}</p>
                <p>{{ movie.vote_average }}</p>
            </li>
        </ul>
    </div>

  </template>
  
  <script>
    import store from '../store'

    export default {
      components: {
        store,
      },
      data() {
        return {
            store,
        }
      },
      methods: {
        getFlagIcon(language) {
            return `https://flagcdn.com/16x12/${language}.png`;
            }
        }
    }

  </script>
  
  <style lang="scss" scoped>
    .movie_items{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 20px;
        margin-top: 50px;
    }

  </style>