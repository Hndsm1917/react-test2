<template>
  <div class="page index-page">
    <div class="page__container index-page__container">
      <div class="page__title">
        <h1 class="page__font page__font--title">
          Котлеты столовские куриные
        </h1>
      </div>

      <div class="page__grid">
        <div 
          v-for="(row, index) in chunkedData" 
          :key="index" 
          class="page__zig-zag"
          :class="[{'page__zig-zag--reverse': isOdd(index)}]"
        >
          <Card 
            class="page__card"
            v-for="(item, id) in row" 
            :key="id" 
            :text="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import './page.scss';
import Card from '@/components/Card.vue';
import data from '@/config/recipe';

const chunkedData = computed(() => {
  let arr = [];

  if (data) {
    for (let i = 0; i <= data.length; i += 3) {
      arr.push(data.slice(i, i + 3));
    }
  }

  return arr;
});

let isOdd = (num) => num % 2;
</script>

<style scoped lang="scss">
  .index-page {
    &__container {
      margin-top: em(170);
    }
  }
</style>