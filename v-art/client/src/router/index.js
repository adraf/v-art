import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import ArtWork from "../components/ArtWork.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: 'Home', component: Home },
    { path: "/about", name: 'About', component: About },
    { path: "/artwork", name: 'ArtWork', component: ArtWork }
  ],
})