<template>
  <div class="videoheadline-wrapper">
    <video
      class="videoheadline-video"
      ref="video"
      autoplay
      :muted="muted"
      loop
    >
      <source
        :src="myImg"
        type="video/mp4"
      >
    </video>

    <div class="videoheadline-content">
      <div class="videoheadline-title-wrapper">
        <div class="videoheadline-title-main">
          IMAGI
        </div>
        <div class="videoheadline-title-sub">
          IMAGI
        </div>
      </div>
    </div>

    <!--button
      class="videoheadline-mute"
      @click="unmute"
    >
      <Icon
        icon="bi:volume-mute"
        v-if="muted"
      /><Icon
        icon="bi:volume-up"
        v-if="!muted"
      />
    </button-->
  </div>
</template>

<script>
// import { Icon } from "@iconify/vue";


export default {
  components: { /*Icon*/ },

  props: {
    cld: {
      type: Object,
      default: () => {return {}}
    },
  },

  data: () => ({
    muted: true,
    socials: [{ message: "Foo" }, { message: "Bar" }, { message: "Bar" }],

    myImg: null,
  }),
  mounted() {
    
    this.myImg = this.cld.video("mainscreen").toURL();
    console.log(this.cld.api)
  },
  methods: {
    unmute() {
      this.muted = !this.muted;
    },
  },
};
</script>
<style scoped lang="scss">
.videoheadline-wrapper {
  position: relative;
  height: auto;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  height: 85vh;
}
.videoheadline-video {
    display: flex;
    top: -25%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 100%;
}

.videoheadline-mute {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  padding: 5px;
  cursor: pointer;
  font-size: 0;

  svg {
    font-size: 50px;
  }
}

.videoheadline-title-wrapper {
  height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    display: block;
}

.videoheadline-content {
  top: 0;
  left: 0;
  position: relative;
  right: 0;
  bottom: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
}

.videoheadline-title-main {
  margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 440px;
    font-family: "Quantum";
    width: 100%;
    /* text-align: center; */
    margin-left: -1%;
    margin-top: -3%;
    color: #f5f5dc00;
    -webkit-text-stroke-width: 8px;
    -webkit-text-stroke-color: #e14d00;
}

.videoheadline-title-sub {
  margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 340px;
    font-family: "Quantum";
    width: 100%;
    /* text-align: center; */
    margin-left: -1%;
    margin-top: 6%;
    color: #fb764b9c;
}

.videoheadline-socials-wrapper {
  top: 6.5%;
  position: absolute;
  width: 100%;
  display: block;
}
.videoheadline-socials {
  background: black;
  display: inline-block;

  svg {
    font-size: 100px;
    color: white;
    padding: 20px;
    border-radius: 3px;
    cursor: pointer;

    &.youtube-icon:hover {
      background-color: #ff0000;
    }
    &.insta-icon:hover {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
    }
    &.twitter-icon:hover {
      background-color: #1da1f2;
    }
  }
}
</style>
