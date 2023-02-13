<template>
  <main v-for="movie in movies" class="card-wrapper">
    <div class="left-card">
      <img class="left-img" :src="movie.img" alt="user avatar">
    </div>
    <div class="right-card">
      <p class="rcard-autor">{{ movie.author }}</p>
      <div class="rcard-info">
        <p class="grey-text" v-if="movie.lessons">{{ movie.lessons }} урока ·</p>
        <p class="grey-text" v-if="movie.duration">{{ movie.duration }} часа ·</p>
        <p class="grey-text" v-if="movie.isAvailable">{{ movie.isAvailable }}</p>
        <p class="grey-text">{{ movie.type }}</p>
      </div>
      <p class="rcard-desc">{{ movie.desc }}</p>
      <button @click="hello" class="rcard-btn">
        <img src="../../../assets/icon/play.svg" alt="play svg">
      </button>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  movies: Array
})
const hello = () => console.log('imma working')
</script>
