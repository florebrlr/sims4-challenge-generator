<template>
  <h2>Générer mon random challenge</h2>
  <RandomChallengeChoices />
</template>

<script>
import RandomChallengeChoices from '@/components/RandomChallengeChoices.vue'

export default {
  name: 'RandomChallenge',
  components: {
    RandomChallengeChoices,
  },
}
</script>

<style scoped></style>
