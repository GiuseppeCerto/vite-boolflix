<template>
    <main class="main_container">
        <div class="container">
            <h2>MOVIES</h2>
            <div class="movie_items">
                <div class="movie_print" v-for="movie in store.movies" :key="movie.id">
                    <img class="poster" :src="store.imageUrl + movie.poster_path" alt="#">
                    <div class="info">
                        <h3>{{ movie.title }}</h3>
                        <h5>{{ movie.original_title }}</h5>
                        <img :src="getFlagIcon(movie.original_language)" alt="#">
                        <p>
                            <span v-for="i in 5" :key="i">
                              <font-awesome-icon :icon="[(i <= Math.round(movie.vote_average)) ? 'fas' : 'far','fa-star']" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <h2 class="series_title">SERIES</h2>
            <div class="movie_items">
                <div class="movie_print" v-for="series in store.series" :key="series.id">
                    <img class="poster" :src="store.imageUrl + series.poster_path" alt="#">
                    <div class="info">
                        <h3>{{ series.name }}</h3>
                        <h5>{{ series.original_name }}</h5>
                        <img :src="getFlagIcon(series.original_language)" alt="#">

                    </div>
                </div>
            </div>
        </div>
    </main>
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
        },

        voteInt(vote) {

            return Math.round(vote / 2);
        },
    },
    }

    

  </script>
  
  <style lang="scss" scoped>

    .main_container{
        padding-top: 30px;
    }
    .movie_items{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 20px;
        margin-top: 50px;
    }

    .movie_print{
        background-color: rgba($color: #000000, $alpha: 0.5);
        border-radius: 8px;
    }

    .info{
        margin: 5px 10px 5px 10px;
    }
    .info *{
        margin-top: 10px;
    }
    
    .poster{
        min-width: 224px;
        min-height: 336px;
    }


  </style>