<template>
  <div class="home">
    <VideoHeadline :cld="cld" />

    <div class="gallery-section visit-gallery">
      Scroll to discover the gallery
      <div class="visit-gallery-about"
            @click="toggleAbout()">
        Or learn more about me !
      </div>
      <Icon icon="bi:arrow-down-short" />
    </div>

    <div class="about-container" v-if="isAboutOpen">
      <h1>About Imagi</h1>
      Hello, I am an anonymous FFXIV player that goes under the name of Imagi that loves to take gposes. <br><br>
      The way i take gposes are very mood-driven, an idea, a theme, a concept or a style pops in my head and then i go do it.<br><br>
      These are mostly made via gshade filters (yes, gshade)  that i modify to my needs, and then some editing in gimp or photoshop, sometimes a lot of it depending on the pic.
      There is no post-painting or drawing, im ass at that. And of course no AI shit.<br><br>
      Yes, im way too addicted at creating new characters for each of those pictures. The wide majority of them are my own characters.
      I do those mainly for myself so i wont follow trends or do "what sells".<br><br>
      But still, I hope you enjoy my work. Keep being yourself in a world where everyone wants to be like the others. Imagine new things.
      Sometimes, the work you're the most proud of is the one people dislike the most. But its ok!<br><br>
      Sidenote: the pictures arent sorted in chronological order, at least for now. <br><br>

      If you want to contact me, you can at <a href="mailto:imagi.ffxiv@gmail.com"> imagi.ffxiv@gmail.com </a>

        <button
            class="defaultButton close-button"
            title="Close"
            @click="toggleAbout()"
          >
            <div>
              <svg
                fill="#f2f2f2"
                width="50"
                height="50"
                viewBox="-0.5 -1 17 17"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z"
                fill-rule="evenodd"
              /></svg>
            </div>
          </button>
    </div>

    <PictureGallery />
    <!-- <YoutubePlayer /> -->

    <div class="about-button"
            @click="toggleAbout()">
      About me !
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import YoutubePlayer from "@/components/YoutubePlayer.vue";
import VideoHeadline from "@/components/VideoHeadline.vue";
import { Icon } from "@iconify/vue";
import PictureGallery from '@/components/PictureGallery.vue';

export default {
  name: "HomeView",
  components: {
    // YoutubePlayer,
    PictureGallery,
    VideoHeadline,
    Icon,
  },

  
  props: {
    cld: {
      type: Object,
      default: () => {return {}}
    },
  },

  data() {
    return {
      isAboutOpen: false
    }
  },

  methods: {
    toggleAbout() {
      this.isAboutOpen = !this.isAboutOpen;
    }
  }

};
</script>

<style lang="scss" scoped>
.gallery-section {
  display: inline-block;
  width: 100%;
}
.visit-gallery {
  height: 15vh;
  text-align: center;
  font-size: 50px;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    display: inline-block;
    /* margin: auto; */
    width: 100%;
    animation: 0.5s ease-in-out 1s infinite alternate bounce;

    @keyframes bounce {
      from {
        /* pushes the sun down past the viewport */
        transform: translateY(0vh);
      }
      to {
        /* returns the sun to its default position */
        transform: translateY(0.5vh);
      }
    }
  }
}

.visit-gallery-about {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  padding: 10px;
  cursor: pointer;
  font-size: 30px;
  background: #000;
  color: white;
  transition: background-color 0.4s, color 0.4s, font-size 0.2s ease-in-out, padding 0.2s ease-in-out;

  &:hover {
    background: white;
    color:black;
    font-size: 35px;
    padding: 15px;
  }
}

.about-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  padding: 10px;
  cursor: pointer;
  font-size: 30px;
  background: #000c;
  color: white;

  transition: background-color 0.4s, color 0.4s, font-size 0.2s ease-in-out, padding 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.918);
    color:black;
    font-size: 35px;
    padding: 15px;
  }
}

.about-container {
position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: #f2f2f2;
  font-size: 20px;
  z-index: 120;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 20%;
  padding-right: 20%;
  text-align: justify;
  text-justify: auto;
  padding: 15%;
  padding-top: 9%;

  h1{
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
  }

  a {
    color:white;
    font-size: 21px;
  }

  .close-button {
    position: absolute;
    top: 7%;
    right: 7%;
    fill: #f2f2f2;
    border: none;
    background: #f5f5dc00;
    font-size: 110px;
    cursor: pointer;

    &:hover{
      background:black;

    }
  }
}
</style>
