<script setup>
import Nav from './components/Nav.vue';

// * Layout
// [ ] Contact Page +/or About/Artist Page
// [ ] Landing Page
// [ ] Individual art pages - feed the info into these with props. 
// [ ] Nav bar - links to the other pages.
// [ ] uploader - for the artist to upload their art and info.
// [ ] admin only page to add the info and upload art with a form. 
// [X] back end 
// [X]        - schemas
// [X]        - controllers
// [X]        - routes
// [X]        - database
// [X]        - CRUD functionality  
// [X] database - to store the art and info.
// TODO: Add in dayjs to updated to updatedBy - created At already exists. In artController.js.

</script>

<template>
  <div>
    <div>
      <Nav />
    </div>
    <div class="flex flex-1 flex-column w-full h-screen">
      <RouterView />
    </div>
  </div>
  
</template>