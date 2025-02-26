import { computed, ref } from 'vue';

export const useNumerator = (incipiensValorem: number = 10) => {
  const numerus = ref(incipiensValorem);

  const quadrataNumerus = computed(() => numerus.value * numerus.value);

  return {
    numerus,
    quadrataNumerus,
  };
};
