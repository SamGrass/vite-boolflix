<script>

import { store } from '../store.js';

export default {
    name: 'HeaderApp',

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <h1>HEADER</h1>
        <div class="searchbar">
            <input type="text" v-model="store.searchTitle" @keyup.enter="$emit('selectTitle')"
                placeholder="inserisci titolo">
            <!-- <div>cerca</div> -->
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

header {
    background-color: #000000;
    position: fixed;
    width: 100%;
    z-index: 1000;
    height: 5rem;
    padding: 0 2rem;
    color: $primary;
    @include flex-center;
    justify-content: space-between;

    .searchbar {
        @include flex-center;
        gap: 0.5rem;

    }

}
</style>