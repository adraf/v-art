<script setup>
import { ref, onBeforeMount } from 'vue'
import { getAllArtwork } from '../composables/getAllArtwork'

const artwork = ref([])
onBeforeMount(async () => {
  artwork.value = await getAllArtwork()
})

</script>
<template>
  <div class="w-full h-100">
    <Card v-for="(art) in artwork" :key="art.id" :item="art">
        <template #content>
          <p>{{ art.title }}</p>
          <p>{{ art.description }}</p>
        </template>
    </Card>
  </div>
</template>