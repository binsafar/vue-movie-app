<template>
  <main class="root-rec">
    <p class="rec-title">Курсы</p>
    <p class="rec-desc grey-text">TopBreyns снимает курсы от ещё многих профессионалов, которые вам будут интересны</p>
    <div class="rec-videos">
      <MovieCard :movies="props.movies"/>
    </div>
  </main>
</template>

<script setup>
import MovieCard from "../MovieCard/MovieCard.vue";

const props = defineProps({
  movies: Array
})
</script>