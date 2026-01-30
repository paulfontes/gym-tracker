<script setup>
import { computed } from 'vue'
import { useWorkoutsStore } from '@/stores/workouts'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useWorkoutsStore()

const workout = computed(() => store.getWorkoutById(route.params.id))

const goBack = () => router.push('/app/workouts')
</script>
<template>
  <div v-if="workout">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h3 class="m-0">Workout</h3>
        <small class="text-muted">{{ workout.date }}</small>
      </div>

      <button class="btn btn-outline-secondary" @click="goBack">Back</button>
    </div>

    <div class="card mb-3">
      <div class="card-body">
        <label for="" class="form-label">Notes</label>
        <input
          v-model="workout.notes"
          class="form-control"
          placeholder="e.g. Felt strong today"
          type="text"
        />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-2">Exercises (next)</h5>
        <p class="text-muted m-0">Next we'll add exercises + sets here!</p>
      </div>
    </div>
  </div>

  <div v-else class="alert alert-warning">Workout not found.</div>
</template>
<style></style>
