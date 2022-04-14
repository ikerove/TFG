<template>
    <section>
        <h3><span>Mis paneles</span> ▸ {{ name }} </h3>

    </section>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'board-view',
        components: {},

        props: {
            name: String,
            id: String
        }
    }
</script>

<style lang="scss" scoped>
    section {
        text-align: left;
    }
    h3 {
        color: O#37474f;
        text-align: left;
        margin: 1.5rem;
        span {
            color: #546e7a;
        }
    }
</style>