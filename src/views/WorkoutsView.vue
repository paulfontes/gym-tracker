<script setup>
import { useRouter } from 'vue-router'
import { useWorkoutsStore } from '@/stores/workouts'

const router = useRouter()
const store = useWorkoutsStore()

const newWorkout = () => {
  const workout = store.createWorkout({ notes: 'New Workout' })
  router.push(`/app/workouts/${workout.id}`)
}

const openWorkout = (id) => {
  router.push(`/app/workouts/${id}`)
}

const removeWorkout = (id) => {
  store.deleteWorkout(id)
}
</script>
<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="m-0">Workouts</h3>
      <button class="btn btn-primary" @click="newWorkout">New Workout</button>
    </div>

    <div v-if="store.sortedWorkouts.length === 0" class="text-muted">No workouts yet.</div>

    <div class="list-group">
      <button
        v-for="w in store.sortedWorkouts"
        :key="w.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        @click="openWorkout(w.id)"
      >
        <div>
          <div class="fw-semibold">{{ w.date }}</div>
          <small class="text-muted">{{ w.notes || 'No notes' }}</small>
        </div>

        <button class="btn btn-sm btn-outline-danger" @click.stop="removeWorkout(w.id)">
          Delete
        </button>
      </button>
    </div>
  </div>
</template>
<style></style>
