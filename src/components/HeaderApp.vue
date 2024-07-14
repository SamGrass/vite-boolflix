<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <header>
        HEADER
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
    color: $primary;

}
</style>