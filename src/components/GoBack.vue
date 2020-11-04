<template>
    <span class="go-back">
        <button @click="goBack">Go back</button>
    </span>
</template>

<style scoped>
    .go-back button{
        border: none;
        border-radius: 8px;
        padding: 12px 30px;
        color: black;
        background: #dedede;

    }
</style>
<script>
export default {
    methods: {
        goBack () {
            return this.$router.go(-1)
        }
    }
}
</script>