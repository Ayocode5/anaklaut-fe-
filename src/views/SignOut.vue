<template>
  <div>
      <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            signout: 'auth/signOut'
        }),

        logout() {
            this.signout().then(() => {
                alert("Akun berhasil dibuat.")
                this.$router.replace({
                    name: 'SignIn'
                })
            }).catch(e => {
                console.log(e)
            })
        }
    }
}   
</script>

<style>

</style>