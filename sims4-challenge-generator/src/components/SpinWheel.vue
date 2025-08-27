<template>

  <!--test spin wheel here-->
  <div class="container">
    <div class="spinBtn">Spin</div>
    <div class="wheel">
      <div class="inputContainer" style="--i: 1; --clr: var(--color1)"><span>élément 1</span></div>
      <div class="inputContainer" style="--i: 2; --clr: var(--color2)"><span>élément 2</span></div>
      <div class="inputContainer" style="--i: 3; --clr: var(--color3)"><span>élément 3</span></div>
      <div class="inputContainer" style="--i: 4; --clr: var(--color4)"><span>élément 4</span></div>
      <div class="inputContainer" style="--i: 5; --clr: var(--color5)"><span>élément 5</span></div>
      <div class="inputContainer" style="--i: 6; --clr: var(--color6)"><span>élément 6</span></div>
      <div class="inputContainer" style="--i: 7; --clr: var(--color7)"><span>élément 7</span></div>
      <div class="inputContainer" style="--i: 8; --clr: var(--color8)"><span>élément 8</span></div>
    </div>
  </div>
</template>

<script setup>
//Créer un tableau d'éléments prédéfinis (dans une ref)
//Boucler avec v-for sur tt les éléments
//Afficher une checkbox par élément

//Créer un tableau dynamique d'élément personnalisés (dans une ref)
//Boucler avec v-for sur tt les éléments
//Afficher un li par élément
//Afficher un input relié a une variable (dans une ref)
//Afficher un bouton + a côté de l'input, et au clic, ajouter le nouvel élément dans le tableau

//imports
// import { ref, onMounted } from 'vue'

// //script pour l'animation de la roue (= fait le random)
// const wheel = ref(null)
// const spinBtn = ref(null)
// let value = Math.ceil(Math.random() * 3600)

// onMounted(() => {
//   spinBtn.value.addEventListener('click', () => {
//     wheel.value.style.transform = 'rotate(' + value + 'deg)'
//     value += Math.ceil(Math.random() * 3600)
//   })
// })
</script>

<style scoped>
:root {
  --color1: #db7093;
  --color2: #20b2aa;
  --color3: #d63e92;
  --color4: #daa520;
  --color5: #ff340f;
  --color6: #ff7f50;
  --color7: #3cb371;
  --color8: #4169e1;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Spin Wheel */
.container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .spinBtn {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: var(--White);
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  border: 3px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  user-select: none;
}

.container .spinBtn::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 30px;
  top: -28px;
  clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
  background-color: var(--White);
}

.container .wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 5px #333,
    0 0 0 15px var(--White),
    0 0 0 18px #111;
  transition: transform 5s ease-in-out;
}

.container .wheel .inputContainer {
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: var(--clr);
  transform-origin: bottom right;
  transform: rotate(calc(45deg * var(--i)));
  clip-path: polygon(0 0%, 56%, 100% 100%, 0 56%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.container .wheel .inputContainer span {
  position: relative;
  transform: rotate(45deg);
  font-size: 1em;
  color: var(--White);
}
/* WC choices */
input[type='checkbox'] {
  accent-color: var(--GreenPlumbob);
}
</style>
