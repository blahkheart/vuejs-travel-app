<template>
    <div class="login-wrap">
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" name="username" type="text">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password">
            </div>
            <button @click="login" type="button" class="cta-btn">Login</button>
        </form>
    </div>
</template>
<script>
import store from '@/store.js'
export default {
    data () {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login () {
            store.user = this.username;
            this.$router.push("/dashboard");
        }
    }
}
</script>

<style scoped>
.login-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
form {
    max-width: 500px;
    width: 100%;
    padding: 20px 30px;
}
.login-wrap label {
    display: block;
    font-size: 15px;
    margin-bottom: 8px;
    text-transform: capitalize;
    text-align: left;
}
.login-wrap input {
    border-radius: 0;
    border: 1px solid #333;
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 15px;
}

</style>