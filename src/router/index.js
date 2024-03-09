import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import {Cloudinary} from "@cloudinary/url-gen";

//const cld = new Cloudinary({cloud: {cloudName: 'dj85dzvfn',},});

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dj85dzvfn'
  }
}); 

// Instantiate a CloudinaryImage object for the image with public ID, 'sample'.
const myImage = cld.image('sample');

// Return the delivery URL
const myUrl = myImage.toURL();

console.log(myUrl)
const routes = [
  {
    path: '/',
    name: 'home',
    props: {cld: cld},
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
