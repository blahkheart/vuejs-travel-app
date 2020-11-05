<template>
    <div class="dashboard-wrap">
        <h1>Welcome {{user}}</h1>
            <p style="text-align:center">
                <router-link :to="{name: 'invoices'}">Invoices</router-link>
            </p>
        <button @click="logout" class="cta-btn">Logout</button>
    </div>
</template>


<script>
import store from '@/store.js'

export default {
    data () {
        return {
            user: store.user
        }
    },
    methods: {
        logout () {
            store.user = ''
            this.$router.push('/')
        }
    }
}
</script>