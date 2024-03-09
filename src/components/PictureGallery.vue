<template>
  <div class="gallery-container">
    <div
      class="gallery-image"
      v-for="image, imageIndex in images"
      :key="imageIndex"
      @click="openImage(imageIndex)"
      :style="{ backgroundImage: 'url(' + image.thumbnailUrl + ')', ...image.addStyle}"
    />

    <div
      class="imageViewer visible"
      v-if="selectedImage"
    >
      <div class="shadow" />
      <div class="container">
        <div class="imagesWrapper">
          <div class="imageContainer">
            <img
              class="image"
              :src="images[selectedImage]?.mainUrl"
            >
          </div>
        </div>
        <div class="toolbar">
          <button
            class="defaultButton closeButton"
            title="Close"
          >
            <div>
              <svg
                fill="#bfbfbf"
                width="21"
                height="21"
                viewBox="-1 -2 18 18"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z"
                fill-rule="evenodd"
              /></svg>
            </div>
          </button>
        </div>
        <button class="arrowButton leftButton">
          <div>
            <svg
              fill="none"
              stroke="#bbb"
              width="22"
              height="22"
              viewBox="3 3 18 18"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><polyline points="15 18 9 12 15 6" /></svg>
          </div>
        </button>
        <button class="arrowButton rightButton">
          <div>
            <svg
              fill="none"
              stroke="#bbb"
              width="22"
              height="22"
              viewBox="3 3 18 18"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageViewer from 'awesome-image-viewer'  
  export default {
    data() {
      return {
        images: [{ mainUrl: "https://i.postimg.cc/9fCbFRPh/admire.png",
 thumbnailUrl: "https://i.postimg.cc/9fCbFRPh/admire.png", 
 description: "admire" },
{ mainUrl: "https://i.postimg.cc/RhNX5k7J/allagan.png",
 thumbnailUrl: "https://i.postimg.cc/RhNX5k7J/allagan.png", 
 description: "allagan" },
{ mainUrl: "https://i.postimg.cc/25GwqkTB/angel.png",
 thumbnailUrl: "https://i.postimg.cc/25GwqkTB/angel.png", 
 description: "angel" },
{ mainUrl: "https://i.postimg.cc/J72pch8N/anora.png",
 thumbnailUrl: "https://i.postimg.cc/J72pch8N/anora.png", 
 description: "anora" },
{ mainUrl: "https://i.postimg.cc/W347gBfY/arcana.png",
 thumbnailUrl: "https://i.postimg.cc/W347gBfY/arcana.png", 
 description: "arcana" },
{ mainUrl: "https://i.postimg.cc/WpBHc4y2/azem.png",
 thumbnailUrl: "https://i.postimg.cc/WpBHc4y2/azem.png", 
 description: "azem" },
{ mainUrl: "https://i.postimg.cc/KvhJsHKj/babe.png",
 thumbnailUrl: "https://i.postimg.cc/KvhJsHKj/babe.png", 
 description: "babe" },
{ mainUrl: "https://i.postimg.cc/htrym1tj/barcode.png",
 thumbnailUrl: "https://i.postimg.cc/htrym1tj/barcode.png", 
 description: "barcode" },
{ mainUrl: "https://i.postimg.cc/zG07vDxH/basic.png",
 thumbnailUrl: "https://i.postimg.cc/zG07vDxH/basic.png", 
 description: "basic" },
{ mainUrl: "https://i.postimg.cc/8cJBnhGh/beach.png",
 thumbnailUrl: "https://i.postimg.cc/8cJBnhGh/beach.png", 
 description: "beach" },
{ mainUrl: "https://i.postimg.cc/L4ncMw6V/belial.png",
 thumbnailUrl: "https://i.postimg.cc/L4ncMw6V/belial.png", 
 description: "belial" },
{ mainUrl: "https://i.postimg.cc/s2HT6fSC/black-white-aura.png",
 thumbnailUrl: "https://i.postimg.cc/s2HT6fSC/black-white-aura.png", 
 description: "black-white-aura" },
{ mainUrl: "https://i.postimg.cc/c1gbz3X9/blackwork.png",
 thumbnailUrl: "https://i.postimg.cc/c1gbz3X9/blackwork.png", 
 description: "blackwork" },
{ mainUrl: "https://i.postimg.cc/W12SsqwP/blur.jpg",
 thumbnailUrl: "https://i.postimg.cc/W12SsqwP/blur.jpg", 
 description: "blur" },
{ mainUrl: "https://i.postimg.cc/rsrZt6DX/buff.png",
 thumbnailUrl: "https://i.postimg.cc/rsrZt6DX/buff.png", 
 description: "buff" },
{ mainUrl: "https://i.postimg.cc/DzNcQjk2/catber.png",
 thumbnailUrl: "https://i.postimg.cc/DzNcQjk2/catber.png", 
 description: "catber" },
{ mainUrl: "https://i.postimg.cc/8zDXs0D9/classy.png",
 thumbnailUrl: "https://i.postimg.cc/8zDXs0D9/classy.png", 
 description: "classy" },
{ mainUrl: "https://i.postimg.cc/MK1r6Sk1/cleo.png",
 thumbnailUrl: "https://i.postimg.cc/MK1r6Sk1/cleo.png", 
 description: "cleo" },
{ mainUrl: "https://i.postimg.cc/zfGdFHyk/cult.png",
 thumbnailUrl: "https://i.postimg.cc/zfGdFHyk/cult.png", 
 description: "cult" },
{ mainUrl: "https://i.postimg.cc/j5GZT8Z8/death.png",
 thumbnailUrl: "https://i.postimg.cc/j5GZT8Z8/death.png", 
 description: "death" },
{ mainUrl: "https://i.postimg.cc/1RqvBQ3b/demon.png",
 thumbnailUrl: "https://i.postimg.cc/1RqvBQ3b/demon.png", 
 description: "demon" },
{ mainUrl: "https://i.postimg.cc/nzs068Yj/diamond.png",
 thumbnailUrl: "https://i.postimg.cc/nzs068Yj/diamond.png", 
 description: "diamond" },
{ mainUrl: "https://i.postimg.cc/hvTMt9YK/draenei.png",
 thumbnailUrl: "https://i.postimg.cc/hvTMt9YK/draenei.png", 
 description: "draenei" },
{ mainUrl: "https://i.postimg.cc/LXZ3xt2j/dream.png",
 thumbnailUrl: "https://i.postimg.cc/LXZ3xt2j/dream.png", 
 description: "dream" },
{ mainUrl: "https://i.postimg.cc/VvqB8zS6/edbun.png",
 thumbnailUrl: "https://i.postimg.cc/VvqB8zS6/edbun.png", 
 description: "edbun" },
{ mainUrl: "https://i.postimg.cc/wT50KQJV/elekel.png",
 thumbnailUrl: "https://i.postimg.cc/wT50KQJV/elekel.png", 
 description: "elekel" },
{ mainUrl: "https://i.postimg.cc/D0kdHSwH/evelynn.png",
 thumbnailUrl: "https://i.postimg.cc/D0kdHSwH/evelynn.png", 
 description: "evelynn" },
{ mainUrl: "https://i.postimg.cc/J0xDx0Db/evo.png",
 thumbnailUrl: "https://i.postimg.cc/J0xDx0Db/evo.png", 
 description: "evo" },
{ mainUrl: "https://i.postimg.cc/ZKmxLvgy/femboyra.png",
 thumbnailUrl: "https://i.postimg.cc/ZKmxLvgy/femboyra.png", 
 description: "femboyra" },
{ mainUrl: "https://i.postimg.cc/Wb76YbLY/feral.png",
 thumbnailUrl: "https://i.postimg.cc/Wb76YbLY/feral.png", 
 description: "feral" },
{ mainUrl: "https://i.postimg.cc/qvbc0b78/fishaura.png",
 thumbnailUrl: "https://i.postimg.cc/qvbc0b78/fishaura.png", 
 description: "fishaura" },
{ mainUrl: "https://i.postimg.cc/C5sD2Jtn/galaxy.png",
 thumbnailUrl: "https://i.postimg.cc/C5sD2Jtn/galaxy.png", 
 description: "galaxy" },
{ mainUrl: "https://i.postimg.cc/BnQ5r9JS/genes.png",
 thumbnailUrl: "https://i.postimg.cc/BnQ5r9JS/genes.png", 
 description: "genes" },
{ mainUrl: "https://i.postimg.cc/Wpg7rw9v/greee.png",
 thumbnailUrl: "https://i.postimg.cc/Wpg7rw9v/greee.png", 
 description: "greee" },
{ mainUrl: "https://i.postimg.cc/HxCrCXbw/grey.png",
 thumbnailUrl: "https://i.postimg.cc/HxCrCXbw/grey.png", 
 description: "grey" },
{ mainUrl: "https://i.postimg.cc/5tDwQXLy/hunter.png",
 thumbnailUrl: "https://i.postimg.cc/5tDwQXLy/hunter.png", 
 description: "hunter" },
{ mainUrl: "https://i.postimg.cc/kX7WS36Q/idk.png",
 thumbnailUrl: "https://i.postimg.cc/kX7WS36Q/idk.png", 
 description: "idk" },
{ mainUrl: "https://i.postimg.cc/7hk0XjBy/illidari.png",
 thumbnailUrl: "https://i.postimg.cc/7hk0XjBy/illidari.png", 
 description: "illidari" },
{ mainUrl: "https://i.postimg.cc/g0xV0Vw1/imagi.png",
 thumbnailUrl: "https://i.postimg.cc/g0xV0Vw1/imagi.png", 
 description: "imagi" },
{ mainUrl: "https://i.postimg.cc/59BwjN09/iris.png",
 thumbnailUrl: "https://i.postimg.cc/59BwjN09/iris.png", 
 description: "iris" },
{ mainUrl: "https://i.postimg.cc/9MGq4Jcg/ivory.png",
 thumbnailUrl: "https://i.postimg.cc/9MGq4Jcg/ivory.png", 
 description: "ivory" },
{ mainUrl: "https://i.postimg.cc/PqDCc2vf/jade.png",
 thumbnailUrl: "https://i.postimg.cc/PqDCc2vf/jade.png", 
 description: "jade" },
{ mainUrl: "https://i.postimg.cc/jd8nJWrT/kel.png",
 thumbnailUrl: "https://i.postimg.cc/jd8nJWrT/kel.png", 
 description: "kel" },
{ mainUrl: "https://i.postimg.cc/bJ8w58jL/kel2.png",
 thumbnailUrl: "https://i.postimg.cc/bJ8w58jL/kel2.png", 
 description: "kel2" },
{ mainUrl: "https://i.postimg.cc/sgXSnYJ1/killerbun.png",
 thumbnailUrl: "https://i.postimg.cc/sgXSnYJ1/killerbun.png", 
 description: "killerbun" },
{ mainUrl: "https://i.postimg.cc/sxsG57Xj/koi.png",
 thumbnailUrl: "https://i.postimg.cc/sxsG57Xj/koi.png", 
 description: "koi" },
{ mainUrl: "https://i.postimg.cc/Y2zWMnnh/lava.png",
 thumbnailUrl: "https://i.postimg.cc/Y2zWMnnh/lava.png", 
 description: "lava" },
{ mainUrl: "https://i.postimg.cc/bwWG3KJF/lizkel.png",
 thumbnailUrl: "https://i.postimg.cc/bwWG3KJF/lizkel.png", 
 description: "lizkel" },
{ mainUrl: "https://i.postimg.cc/VLH5k3jL/lizkel2.png",
 thumbnailUrl: "https://i.postimg.cc/VLH5k3jL/lizkel2.png", 
 description: "lizkel2" },
{ mainUrl: "https://i.postimg.cc/KvcgzPwQ/lost.png",
 thumbnailUrl: "https://i.postimg.cc/KvcgzPwQ/lost.png", 
 description: "lost" },
{ mainUrl: "https://i.postimg.cc/442X6pnW/love.png",
 thumbnailUrl: "https://i.postimg.cc/442X6pnW/love.png", 
 description: "love" },
{ mainUrl: "https://i.postimg.cc/BnXL5qqK/miss.png",
 thumbnailUrl: "https://i.postimg.cc/BnXL5qqK/miss.png", 
 description: "miss" },
{ mainUrl: "https://i.postimg.cc/3RCdrNZP/nerdy.png",
 thumbnailUrl: "https://i.postimg.cc/3RCdrNZP/nerdy.png", 
 description: "nerdy" },
{ mainUrl: "https://i.postimg.cc/7YCwmb2w/oraora.png",
 thumbnailUrl: "https://i.postimg.cc/7YCwmb2w/oraora.png", 
 description: "oraora" },
{ mainUrl: "https://i.postimg.cc/8cps7GKs/paint.png",
 thumbnailUrl: "https://i.postimg.cc/8cps7GKs/paint.png", 
 description: "paint" },
{ mainUrl: "https://i.postimg.cc/4d5xkMfG/pinker.png",
 thumbnailUrl: "https://i.postimg.cc/4d5xkMfG/pinker.png", 
 description: "pinker" },
{ mainUrl: "https://i.postimg.cc/c1hrVKC3/princess.png",
 thumbnailUrl: "https://i.postimg.cc/c1hrVKC3/princess.png", 
 description: "princess" },
{ mainUrl: "https://i.postimg.cc/C5c5D2X7/rave.png",
 thumbnailUrl: "https://i.postimg.cc/C5c5D2X7/rave.png", 
 description: "rave" },
{ mainUrl: "https://i.postimg.cc/fT6ZFZcX/reddit.png",
 thumbnailUrl: "https://i.postimg.cc/fT6ZFZcX/reddit.png", 
 description: "reddit" },
{ mainUrl: "https://i.postimg.cc/BnKZQtSM/renegade.png",
 thumbnailUrl: "https://i.postimg.cc/BnKZQtSM/renegade.png", 
 description: "renegade" },
{ mainUrl: "https://i.postimg.cc/Z58kMNKt/rgb.jpg",
 thumbnailUrl: "https://i.postimg.cc/Z58kMNKt/rgb.jpg", 
 description: "rgb" },
{ mainUrl: "https://i.postimg.cc/nz0pwD2c/rock.png",
 thumbnailUrl: "https://i.postimg.cc/nz0pwD2c/rock.png", 
 description: "rock" },
{ mainUrl: "https://i.postimg.cc/hjSKrr95/saturn.png",
 thumbnailUrl: "https://i.postimg.cc/hjSKrr95/saturn.png", 
 description: "saturn" },
{ mainUrl: "https://i.postimg.cc/tJsQSm72/scorp.png",
 thumbnailUrl: "https://i.postimg.cc/tJsQSm72/scorp.png", 
 description: "scorp" },
{ mainUrl: "https://i.postimg.cc/13wP1TBd/seduce.png",
 thumbnailUrl: "https://i.postimg.cc/13wP1TBd/seduce.png", 
 description: "seduce" },
{ mainUrl: "https://i.postimg.cc/Bbb4Wn75/steampunk.png",
 thumbnailUrl: "https://i.postimg.cc/Bbb4Wn75/steampunk.png", 
 description: "steampunk" },
{ mainUrl: "https://i.postimg.cc/6qPwBxFk/strengh.png",
 thumbnailUrl: "https://i.postimg.cc/6qPwBxFk/strengh.png", 
 description: "strengh" },
{ mainUrl: "https://i.postimg.cc/nrN86YDZ/summer.png",
 thumbnailUrl: "https://i.postimg.cc/nrN86YDZ/summer.png", 
 description: "summer" },
{ mainUrl: "https://i.postimg.cc/5tJJ43k2/tame.png",
 thumbnailUrl: "https://i.postimg.cc/5tJJ43k2/tame.png", 
 description: "tame" },
{ mainUrl: "https://i.postimg.cc/QMm2XrTf/tatootriple.png",
 thumbnailUrl: "https://i.postimg.cc/QMm2XrTf/tatootriple.png", 
 description: "tatootriple" },
{ mainUrl: "https://i.postimg.cc/DZj3cKfS/tribal.png",
 thumbnailUrl: "https://i.postimg.cc/DZj3cKfS/tribal.png", 
 description: "tribal" },
{ mainUrl: "https://i.postimg.cc/cJcSrnVM/under.png",
 thumbnailUrl: "https://i.postimg.cc/cJcSrnVM/under.png", 
 description: "under" },
{ mainUrl: "https://i.postimg.cc/TPT8MPpy/valky.png",
 thumbnailUrl: "https://i.postimg.cc/TPT8MPpy/valky.png", 
 description: "valky" },
{ mainUrl: "https://i.postimg.cc/0yRRnnv0/vampy.png",
 thumbnailUrl: "https://i.postimg.cc/0yRRnnv0/vampy.png", 
 description: "vampy" },
{ mainUrl: "https://i.postimg.cc/1tWJdmqZ/yorr.png",
 thumbnailUrl: "https://i.postimg.cc/1tWJdmqZ/yorr.png", 
 description: "yorr" },
{ mainUrl: "https://i.postimg.cc/CLfpbt3K/ver.png",
 thumbnailUrl: "https://i.postimg.cc/CLfpbt3K/ver.png", 
 description: "ver" },
{ mainUrl: "https://i.postimg.cc/G3f18rSN/veridian.png",
 thumbnailUrl: "https://i.postimg.cc/G3f18rSN/veridian.png", 
 description: "veridian" },
{ mainUrl: "https://i.postimg.cc/1tzLXY0s/what.png",
 thumbnailUrl: "https://i.postimg.cc/1tzLXY0s/what.png", 
 description: "what" },
{ mainUrl: "https://i.postimg.cc/nzV3TjMk/whata.png",
 thumbnailUrl: "https://i.postimg.cc/nzV3TjMk/whata.png", 
 description: "whata" },
{ mainUrl: "https://i.postimg.cc/yY3vfz6w/zen.png",
 thumbnailUrl: "https://i.postimg.cc/yY3vfz6w/zen.png", 
 description: "zen" },
{ mainUrl: "https://i.postimg.cc/LXhb2gRs/yolo.png",
 thumbnailUrl: "https://i.postimg.cc/LXhb2gRs/yolo.png", 
 description: "yolo" },
        ],
        selectedImage: null
      };
    },


    methods: {
      openImage(selectedImage) {
        this.selectedImage = selectedImage;
        


      //   new ImageViewer({
      //    images: this.images,
      //    currentSelected: this.selectedImage,
      //  })
      }
    }

  }
</script>
<style scoped>

  .gallery-container {
    width: 100%;
    height: auto;
    overflow: auto;
    background: black;
            
  }

  .gallery-container::-webkit-scrollbar {
    height: 0px;
  }

  .gallery-offsetter {
    height: 400px;
    text-align: left;
    position: relative;
    
  }

  .spacer {
    height: 200px;
    display: inline-block;
    position: relative;
    width: 177.5px;
    flex-grow: 1;
  }

  .gallery-image {  
    max-height: 355px;
    position: relative;
    display: inline-block;
    max-width: 355px;
    height: 100vh;
    width: 100vw;
    cursor: pointer;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .preview {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    font-family: Catamaran-Medium;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  .main-preview {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 100px;
    overflow: hidden;
  }

  .main-preview-image {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    cursor: default;
  }

  .preview input[type=button], .preview button {
    font-size: 1rem;
    padding: 0;
    background: none;
}

  .preview > .main-wrapper > .leftButton {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
}

.preview > .main-wrapper > .rightButton {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
}

.preview > .main-wrapper > .arrowButton {
    width: 80px;
    height: calc(100% - 300px);
    min-height: 100px;
    max-height: 160px;
    display: flex;
    color: #aaa;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity 200ms ease-in-out;
}

.toolbar{
  width: 55px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
}


/********************************************* */

@media (hover: hover) and (pointer: fine) {
    .thinScrollbar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .thinScrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .thinScrollbar::-webkit-scrollbar-thumb {
      background: #bbb;
      border-radius: 20px;
    }
    .darkMode .thinScrollbar::-webkit-scrollbar-thumb {
      background: #555;
    }
  }
  .hiddenScrollbar, .imageViewer > .container > .footer > .thumbnailsWrapper, .imageViewer > .container > .imagesWrapper > .imageContainer, .imageViewer > .container > .imagesWrapper {
    scrollbar-width: none;
  }
  
  .hiddenScrollbar::-webkit-scrollbar, .imageViewer > .container > .footer > .thumbnailsWrapper::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper > .imageContainer::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  
  .transparentBackground {
    transition: background-color 50ms;
  }
  
  .transparentBackground:enabled:active {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground {
      transition: background-color 150ms;
    }
    .transparentBackground:enabled:hover {
      background-color: rgba(0, 0, 0, 0.03) !important;
    }
    .transparentBackground:enabled:focus {
      background-color: rgba(0, 0, 0, 0.04) !important;
    }
    .transparentBackground:enabled:active {
      background-color: rgba(0, 0, 0, 0.08) !important;
    }
  }
  .transparentBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    transition: background-color 50ms;
  }
  
  .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      transition: background-color 150ms;
    }
    .darkTransparentBackground:enabled:hover, .imageViewer > .container > .arrowButton:enabled:hover, .imageViewer > .container > .toolbar > .defaultButton:enabled:hover,
  .imageViewer > .container > .toolbar > .customButton:enabled:hover {
      background-color: rgba(0, 0, 0, 0.2) !important;
    }
    .darkTransparentBackground:enabled:focus, .imageViewer > .container > .arrowButton:enabled:focus, .imageViewer > .container > .toolbar > .defaultButton:enabled:focus,
  .imageViewer > .container > .toolbar > .customButton:enabled:focus {
      background-color: rgba(0, 0, 0, 0.3) !important;
    }
    .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
      background-color: rgba(0, 0, 0, 0.4) !important;
    }
  }
  .darkTransparentBackground:disabled, .imageViewer > .container > .arrowButton:disabled, .imageViewer > .container > .toolbar > .defaultButton:disabled,
  .imageViewer > .container > .toolbar > .customButton:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .coloredBackground {
    opacity: 0.8;
  }
  
  .coloredBackground:enabled:active {
    opacity: 1;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .coloredBackground:enabled:hover {
      opacity: 0.85;
    }
    .coloredBackground:enabled:focus {
      opacity: 0.9;
    }
    .coloredBackground:enabled:active {
      opacity: 1;
    }
  }
  .coloredBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .transparentBackground_dark {
    transition: background-color 50ms;
  }
  
  .transparentBackground_dark:enabled:active {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground_dark {
      transition: background-color 150ms;
    }
    .transparentBackground_dark:enabled:hover {
      background-color: rgba(255, 255, 255, 0.12) !important;
    }
    .transparentBackground_dark:enabled:focus {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .transparentBackground_dark:enabled:active {
      background-color: rgba(255, 255, 255, 0.07) !important;
    }
  }
  .imageViewer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999999993;
  }
  .imageViewer * {
    padding: 0;
    margin: 0;
    font-family: Catamaran-Medium;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  .imageViewer a::-moz-focus-inner,
  .imageViewer input::-moz-focus-inner,
  .imageViewer button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .imageViewer a {
    text-decoration: none;
    outline: none;
  }
  .imageViewer input, .imageViewer button, .imageViewer select {
    border: none;
    outline: none;
  }
  .imageViewer input[type=button], .imageViewer button, .imageViewer select {
    cursor: pointer;
  }
  .imageViewer input:required,
  .imageViewer input:invalid {
    box-shadow: none;
  }
  .imageViewer input[type=button], .imageViewer button {
    font-size: 1rem;
    padding: 0;
    background: none;
  }
  .imageViewer > .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    opacity: 0;
    transition: opacity 160ms ease-in-out;
  }
  .imageViewer > .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .imageViewer > .container > .imagesWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 100px;
    overflow: hidden;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    cursor: default;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer > .image {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    cursor: pointer;
  }
  .imageViewer > .container > .imagesWrapper .stretch > .image {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  .imageViewer > .container > .imagesWrapper .zoom {
    display: inline;
  }
  .imageViewer > .container > .imagesWrapper .zoom > .image {
    max-width: unset;
    max-height: unset;
    margin-bottom: -20px;
  }
  .imageViewer > .container > .touchSurface {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .imageViewer > .container > .toolbar {
    width: 55px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .imageViewer > .container > .toolbar > * {
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    width: 100%;
    height: 55px;
    display: flex;
  }
  .imageViewer > .container > .toolbar > .defaultButton {
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .defaultButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .zoomOutButton {
    display: none;
  }
  .imageViewer > .container > .toolbar > .customButton {
    background-size: 19px auto;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .imageViewer > .container > .arrowButton {
    width: 80px;
    height: calc(100% - 300px);
    min-height: 100px;
    max-height: 160px;
    display: flex;
    color: #aaa;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .arrowButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .leftButton {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
  }
  .imageViewer > .container > .rightButton {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
  }
  .imageViewer > .container > .footer {
    width: auto;
    max-width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0);
    gap: 8px;
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .footer > .description {
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;
    color: #fafafa;
    border-radius: 2px;
  }
  .imageViewer > .container > .footer > .description:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 80px;
    overflow: scroll;
    display: flex;
    gap: 12px;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .thumbnail {
    width: auto;
    max-width: 120px;
    height: auto;
    max-height: 70px;
    border: solid 3px transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .selected {
    border-color: white;
  }
  
  .imageViewer.hudOpacity > .container > .toolbar > *,
  .imageViewer.hudOpacity > .container > .arrowButton,
  .imageViewer.hudOpacity > .container > .footer {
    opacity: 0;
  }
  
  .imageViewer.hudDisplay > .container > .toolbar > *,
  .imageViewer.hudDisplay > .container > .arrowButton,
  .imageViewer.hudDisplay > .container > .footer {
    display: none;
  }
  
  .imageViewer.halfHud > .container > .toolbar > .closeButton,
  .imageViewer.halfHud > .container > .toolbar > .zoomOutButton {
    opacity: 1;
    display: flex;
  }
  .imageViewer.halfHud > .container > .toolbar > .zoomInButton {
    opacity: 0;
    display: none;
  }
  
  .imageViewer.visible {
    visibility: visible;
  }
  .imageViewer.visible > .shadow,
  .imageViewer.visible > .container {
    opacity: 1;
  }
  
  @media (max-width: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .arrowButton {
      width: 65px;
    }
    .imageViewer > .container > .footer > .description {
      font-size: 1rem;
    }
  }
  @media (orientation: landscape) and (max-height: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .footer {
      bottom: 5px;
    }
  }
</style>