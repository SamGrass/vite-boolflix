<script>
import { store } from '../store.js';
import axios from 'axios';


export default {
    name: 'Card',
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        rating: Number,
        synopsis: String,
        image: String,
    },
    methods: {
        getFlag(lang) {
            lang = lang.toUpperCase();
            
            if (lang === 'EN') {
            lang = 'US'
            } else if (lang === 'JA') {
                lang = 'JP'
            };

            const flag = store.flagsURL + `${lang}/flat/64.png`;
            axios.get(flag).then(res => {
                return res
            }).catch(err => {
                console.log(err.name);
            })
        }
    },
}
</script>

<template>
    <div class="card">
        <!-- lato locandina immagine -->
        <div class="image-container">
            <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle">
        </div>
        
        <!-- lato carta da vedere in hover -->
        <div class="txt-card-container">
            <h3>{{ title }}</h3>
            <h4>{{ originalTitle }}</h4>
            <div >
                <img class="flag" :src="getFlag(lang)" alt="">
            </div>
            <div class="rating">
                <i v-for="n in rating" class="fa-solid fa-star"></i>
            </div>
            <div class="txt-justified">{{ synopsis }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    width: 25%;
    height: 450px;

    .image-container{
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }
    

    .txt-card-container {
        display: none;
        padding: 1rem;
        height: 100%;
        background-color: #000;
        color: #fff;
        overflow-y: auto;
        text-align: center;

        & > * {
            margin-bottom: 0.5rem;
        }

        // .rating::after {
        //     font-family: 'FontAwesome';
        //     content: '\f005';
        // }
        .txt-justified {
            text-align: justify;
        }

    }

    &:hover {
        .image-container {
            display: none;
        }
        .txt-card-container{
            display: block;
        }
    }
}
</style>