<template>
  <h3>Counter: {{ numerus }}</h3>
  <h3>Square: {{ quadrataNumerus }}</h3>

  <div>
    <button @click="numerus++">+1</button>
    <button @click="numerus--">-1</button>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    valorem: { type: Number, required: true },
  },

  setup(props) {
    const numerus = ref(props.valorem);
    const quadrataNumerus = computed(() => numerus.value * numerus.value);

    return {
      numerus,
      quadrataNumerus,
    };
  },
});
</script>
