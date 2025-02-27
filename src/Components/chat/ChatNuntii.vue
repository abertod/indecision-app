<template>
  <div class="p-4 flex-1 overflow-y-auto">
    <div class="flex flex-col space-y-2">
      <ChatBullula :meus-est="true" nuntius="Cuando nos vemos?" />

      <ChatBullula
        :meus-est="false"
        nuntius="No"
        imago="https://yesno.wtf/assets/no/10-d5ddf3f82134e781c1175614c0d2bab2.gif"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBullula from './ChatBullula.vue';
</script>
