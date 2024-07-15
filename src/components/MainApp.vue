<script>
import Card from './Card.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'MainApp',
    components: {
        Card
    },
    // prendere la lista in store per poi farne un ciclo di carte
    data() {
        return {
            store
        }
    },
    methods: {
        
        // trasformare il rating dei film in un rating da 0 a 5 invece che da 0 a 10
        getRating(num) {
            let rating = Math.ceil(num / 2);
            // for (let i = 0; i <= rating; i++) {
            //     const element = array[i];   
            // }
            return rating
        }
    },  
    created() {
        // console.log(this.getFlag());
    },  
}
</script>

<template>
    <main>
        <div class="container">
            <!-- film -->
            <section>
                <h2>FILM</h2>

                <!-- container lista film -->
                <div class="movie-list-container">
                    <Card v-for="(movie, index) in store.moviesList" :key="index" :title="movie.title" :originalTitle="movie.original_title" :lang="movie.original_language" :rating="getRating(movie.vote_average)" :synopsis="movie.overview" :image="`w342${movie.poster_path}`"/>
                </div>

                <h2>SERIE TV</h2>

                <div class="movie-list-container">
                    <!-- lista film da aggiungere con card -->
                    <Card v-for="(tvSerie, index) in store.tvSeriesList" :key="index" :title="tvSerie.name" :originalTitle="tvSerie.original_name" :lang="tvSerie.original_language" :rating="getRating(tvSerie.vote_average)" :synopsis="tvSerie.overview" :image="`w300${tvSerie.poster_path}`"/>
                </div>
            </section>
            <!-- serie tv -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

main {
    padding: 7rem 0;
    background-color: #555555;

    h2 {
        font-size: 1.8rem;
        margin: 1rem 0 2rem;
    }

    .movie-list-container{
        display: flex;
        flex-wrap: wrap;
    }

}
</style>