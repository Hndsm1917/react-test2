<template>
  <div
    :style="[{ fontSize: `${fSize}px` }]"
    :class="[`js-is-${currentSizesConfig.name}`]"
  >
    <slot />
  </div>
</template>

<script>
const SIZES_CONFIG = {
  desktop: {
    name: 'desktop',
    width: 1440,
    height: 970,
    minWidth: 720,
    minHeight: 375,
    fontSize: 16,
  },

  mobile: {
    name: 'mobile',
    width: 375,
    height: 623,
    minWidth: 0,
    minHeight: 0,
    fontSize: 16,
  },
};

export default {
  name: 'WebResizer',

  data() {
    return {
      isMobile: false,
      isOrientationHorizontal: false,
      vW: null,
      vH: null,
    };
  },

  computed: {
    /**
     * @type {Object} current resize sizes config
     */
    currentSizesConfig() {
      switch (true) {
        case this.isMobile && !this.isOrientationHorizontal:
          return SIZES_CONFIG.mobile;
        case !this.isMobile:
          return SIZES_CONFIG.desktop;
      }

      return SIZES_CONFIG.desktop;
    },

    fSize() {
      const config = this.currentSizesConfig;
      if (!this.vW || !this.vH) return config.fontSize;

      const horizontalRatio = Math.max(config.minWidth, this.vW) / config.width;
      //const verticalRatio = Math.max(config.minHeight, this.vH) / config.height;
      const minRatio = horizontalRatio;

      return config.fontSize * minRatio;
    },
  },

  mounted() {
    this.onResize();
    this.setScreenOrientation();
    window.addEventListener('resize', this.onResize);
  },

  methods: {
    setScreenOrientation() {
      this.isOrientationHorizontal = this.vW >= this.vH;
    },

    onResize(needEmit = true) {
      console.log('test');
      this.vW = document.documentElement?.clientWidth || window.innerWidth;
      this.vH = document.documentElement?.clientHeight || window.innerHeight;
      this.setScreenOrientation();
      if (needEmit) this.$emit('resize');
    },
  },
};
</script>
