<template>
  <div class="bg-gray-200 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>La esposa de otro</span>
    </div>

    <ChatNuntii :nuntii="nuntii" />

    <TextusArca @mitte-nuntius="($event) => cumNovumMuntius($event)" />
  </div>
</template>

<script lang="ts" setup>
import ChatNuntii from '@/components/chat/ChatNuntii.vue';
import TextusArca from '@/components/chat/TextusArca.vue';
import { useChat } from '@/composables/useChat';

const { nuntii, cumNovumMuntius } = useChat();
</script>
