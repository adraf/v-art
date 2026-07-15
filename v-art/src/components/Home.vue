<script setup>
import { ref } from 'vue'


// * Layout
// Contact Page +/or About/Artist Page
// Landing Page
// Individual art pages - feed the info into these with props. 
// Nav bar - links to the other pages.
// back end 
//        - schemas
//        - controllers
//        - routes
//        - database
//        - CRUD functionality  
// uploader - for the artist to upload their art and info.
// database - to store the art and info.
// admin only page to add the info and upload art with a form. 

const title = ref('V-Art')
</script>


<template>
  <div>{{ title }}</div>
</template>
