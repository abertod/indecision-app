import { somnum } from '@/helpers/somnum';
import type { ChatNuntius } from '@/interfaces/chat-nuntius-interface';
import type { YesNoResponsio } from '@/interfaces/yes-no.responsio';
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

  const hicTibiResponsum = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponsio;
    return data;
  };

  const cumNovumMuntius = async (textus: string) => {
    if (textus.length === 0) return;
    if (!textus.endsWith('?')) return;

    nuntii.value.push({
      id: new Date().getTime(),
      nuntius: textus,
      meusEst: true,
    });

    await somnum(1.5);

    const { answer, image } = await hicTibiResponsum();

    nuntii.value.push({
      id: new Date().getTime(),
      nuntius: answer,
      meusEst: false,
      imago: image,
    });
  };

  return {
    nuntii,
    cumNovumMuntius,
  };
};
