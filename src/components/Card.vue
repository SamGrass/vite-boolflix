<script>
export default {
    name: 'Card',
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        rating: Number,
        synopsis: String,
        image: String,
    }
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
            <div>{{ lang }}</div>
            <div>{{ rating }}</div>
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