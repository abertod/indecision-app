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