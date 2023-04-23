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
            v-for="(item, id) in row" 
            :key="id" 
            class="page__card"
            :is-last-in-row="isLastInRow(row, id + 1) && !isLastInList(id + 1)"
            :is-last="isLastInRow(row, id + 1) && isLastInList(index + 1, id + 1)"
            :is-odd="isOdd(index)"
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

const GRID_LENGTH = 3;

const chunkedData = computed(() => {
  let arr = [];

  if (data) {
    for (let i = 0; i <= data.length; i += 3) {
      arr.push(data.slice(i, i + 3));
    }
  }

  return arr;
});

const isOdd = (num) => Boolean(num % 2);
const isLastInRow = (arr, id) => arr.length === id;
const isLastInList = (index, id) => index * id === data.length || id < GRID_LENGTH;
</script>

<style scoped lang="scss">
  .index-page {
    &__container {
      margin-top: em(170);
    }
  }
</style>