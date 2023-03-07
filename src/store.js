import { reactive } from 'vue'

const store = reactive({
  movies: [],
  series: [],
  search: '',
  imageUrl: 'https://image.tmdb.org/t/p/w342'
})

export default store