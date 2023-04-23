<template>
  <component :is="icon" />
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    icon() {
      if (this.path) {
        return defineAsyncComponent(() =>
          import(`../../assets/svg/${this.path}/${this.name}.svg?component`)
        );
      } else {
        return defineAsyncComponent(() =>
          import(`../../assets/svg/${this.name}.svg?component`)
        );
      }
    },
  },
};
</script>
