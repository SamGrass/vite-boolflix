import { reactive } from "vue";

export const store = reactive({
    searchText: '',
    moviesList: 'https://api.themoviedb.org/3/search/movie?api_key=2e8c51d61cce09979ab13516d65193ba&query='


})