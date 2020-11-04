<template>
    <div class="dashboard-wrap">
        <h1>Welcome {{user}}</h1>
        <button class="cta-btn">Logout</button>
    </div>
</template>


<script>
import store from '@/store.js'

export default {
    data () {
        return {
            user: store.user
        }
    }
}
</script>