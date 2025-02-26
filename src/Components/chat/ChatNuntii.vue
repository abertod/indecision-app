<template>
  <div class="p-4 flex-1 overflow-y-auto">
    <div class="flex flex-col space-y-2">
      <ChatBullula :meus-est="true" nuntius="Cuando nos vemos?" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBullula from './ChatBullula.vue';
</script>
