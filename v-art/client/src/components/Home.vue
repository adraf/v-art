<script setup>
import { ref } from 'vue'

const title = ref('Samantha Vince Art')
</script>


<template>
  <main class="p-4">
    <div class="w-full text-2xl font-bold flex align-items-center justify-content-center">
      {{ title }}
    </div>
  </main>
</template>
