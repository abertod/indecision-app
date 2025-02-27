import type { ChatNuntius } from '@/interfaces/chat-nuntius-interface';
import { ref } from 'vue';

export const useChat = () => {
  const nuntii = ref<ChatNuntius[]>([
    /* {
      id: new Date().getTime(),
      nuntius: '¿Cuándo nos vemos?',
      meusEst: true,
    },
    {
      id: new Date().getTime() + 1,
      nuntius: 'No',
      meusEst: false,
      imago: 'https://yesno.wtf/assets/no/10-d5ddf3f82134e781c1175614c0d2bab2.gif',
    },*/
  ]);

  const cumNovumMuntius = (textus: string) => {
    nuntii.value.push({
      id: new Date().getTime(),
      nuntius: textus,
      meusEst: true,
    });
  };

  return {
    nuntii,
    cumNovumMuntius,
  };
};
