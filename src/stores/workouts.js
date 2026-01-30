import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWorkoutsStore = defineStore('workouts', () => {
  const workouts = ref([
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      notes: 'Push day',
      entries: [
        {
          id: crypto.randomUUID(),
          exerciseName: 'Bench Press',
          sets: [
            { id: crypto.randomUUID(), reps: 8, weight: 135 },
            { id: crypto.randomUUID(), reps: 8, weight: 135 },
          ],
        },
      ],
    },
  ])

  const sortedWorkouts = computed(() =>
    [...workouts.value].sort((a, b) => b.date.localeCompare(a.date)),
  )

  const getWorkoutById = (id) => workouts.value.find((w) => w.id === id)

  const createWorkoutById = ({ date, notes }) => {
    const workout = {
      id: crypto.randomUUID(),
      date: date || new Date().toISOString().slice(0, 10),
      notes: notes || '',
      entries: [],
    }
    workouts.value.unshift(workout)
    return workout
  }
  const deleteWorkout = (id) => {
    workouts.value = workouts.value.filter((w) => w.id !== id)
  }

  return {
    workouts,
    sortedWorkouts,
    getWorkoutById,
    createWorkoutById,
    deleteWorkout,
  }
})
