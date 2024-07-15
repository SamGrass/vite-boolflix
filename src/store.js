import { reactive } from "vue";

export const store = reactive({
    searchTitle: '',
    moviesList: [],
    flagList: [],
    moviesURL: 'https://api.themoviedb.org/3/search/movie?api_key=2e8c51d61cce09979ab13516d65193ba&query=',
    flagsURL: 'https://flagsapi.com/'
    // BE/flat/64.png
})