<template>
  <div>
    <YouTube
      src="https://www.youtube.com/watch?v=jNQXAC9IVRw"
      ref="youtube"
      @ready="onReady"
    />
  </div>
</template>
<script>
import YouTube from "vue3-youtube";

export default {
  components: {
    YouTube,
  },
  mounted() {
    this.$refs.youtube.playVideo();
    //setTimeout(() => {      this.$refs.youtube.playVideo() }, 1000);
  },
  methods: {
    onReady() {
      console.log("wut");
      this.$refs.youtube.playVideo();
      this.$refs.youtube.playVideo();
    },
  },
};
</script>
<style lang=""></style>
