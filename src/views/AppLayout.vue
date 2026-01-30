<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { user, logout } = useAuth0()

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>
<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h2 class="m-0">Gym Tracker</h2>
        <small class="text-muted">Signed in as {{ user?.email }}</small>
      </div>
      <button class="btn btn-outline-danger" @click="handleLogout">Log out</button>
    </div>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/app/workouts">Workouts</RouterLink>
      </li>
    </ul>

    <RouterView />
  </div>
</template>
<style></style>
