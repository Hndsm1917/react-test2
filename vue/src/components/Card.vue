<template>
  <div class="card">
    <div class="card__content">
      <slot name="data">
        <span class="card__font">
          {{ text }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      default: "",
      required: false,
    }
  })
</script>

<style lang="scss" scoped>
  .card {
    position: relative;

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: 1px solid $color-blue;
    }

    &__font {
      font-size: em(20);
      line-height: em(23, 20);
      letter-spacing: 0.03em;
      text-align: center;
    }
  }
</style>