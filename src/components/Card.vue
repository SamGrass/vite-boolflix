<script>
export default {
    name: 'Card',
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        rating: Number,
        synopsis: String,
    }
}
</script>

<template>
    <div class="card">
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
    flex-basis: 25%;
    height: 400px;

    .txt-card-container {
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
}
</style>