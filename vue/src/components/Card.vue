<template>
  <div 
    class="card" 
    :class="[
      {'card--row-last': isLastInRow},
      {'card--reverse': isOdd},
      {'card--no-arrow': isLast},
    ]"
  > 
    <div class="card__content">
      <slot name="data">
        <span class="card__font">
          {{ text }}
        </span>
      </slot>

      <slot></slot>
      <!-- <CIcon class="card__icon card__icon--arrow" name="arrow"/> -->
      <img class="card__icon card__icon--arrow" src="arrow.png" alt="">
    </div>
  </div>
</template>

<script setup>
import CIcon from "@/components/ui/CIcon.vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
    required: false,
  },
  isOdd: {
    type: Boolean, 
    required: false,
    default: false,
  },
  isLastInRow: {
    type: Boolean, 
    required: false,
    default: false,
  },
  isLast: {
    type: Boolean, 
    required: false,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
  .card { 
    $self: &;
    position: relative;

    &--no-arrow {
      #{$self}__icon {
        display: none;
      }
    }

    &--reverse {
      #{$self}__icon {
        left: 0;
        transform: rotate(180deg) translateX(100%);
      }
    }

    &--row-last {
      #{$self}__icon {
        bottom: em(-46);
        right: 0;
        left: 50%;
        transform: translateX(-50%) rotate(90deg);
        z-index: 10;
        width: em(57);
        height: em(37);
      }
    }

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

    &__icon {
      &--arrow {
        width: em(76);
        height: em(46);
        position: absolute;
        right: 0;
        transform: translateX(100%);
      }
    }
  }
</style>