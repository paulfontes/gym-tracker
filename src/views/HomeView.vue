<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

const handleLogout = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  })
}
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-3">Gym Tracker</h1>

    <button v-if="!isAuthenticated" class="btn btn-primary" @click="loginWithRedirect()">
      Log in
    </button>

    <button v-else class="btn btn-outline-danger" @click="handleLogout()">Log out</button>
  </div>
</template>
<style></style>
