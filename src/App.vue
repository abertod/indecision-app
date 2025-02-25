<template>
  <h1>Mi primera app de Vue</h1>

  <h1 class="text-5xl text-rose-800 font-bold underline">Hola Mundoo</h1>

  <MeusNumerator :valorem="6" />
  <MeusNumeratorScript :valorem="10" />

  <MeusNumeratorScript2 :valorem="2" />
</template>

<script lang="ts" setup>
import MeusNumerator from './Components/MeusNumerator.vue';
import MeusNumeratorScript from './Components/MeusNumeratorScript.vue';
import MeusNumeratorScript2 from './Components/meus-numerator-script/MeusNumeratorScript2.vue';
</script>
