<template>
  <h2>Créer mon Wheel Challenge</h2>
  <div class="WCContainer">
    <WheelChallengeChoices />
    <!-- <SpinWheel /> -->
    <SpinWheel />
  </div>
</template>

<script setup>
import SpinWheel from '@/components/SpinWheel.vue'
import WheelChallengeChoices from '@/components/WheelChallengeChoices.vue'
</script>

<style scoped>
.WCContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h2 {
  text-align: center;
}
</style>
