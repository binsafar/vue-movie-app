<template>
  <main class="comment-main">
    <div class="comment-info">
      <p class="comment-amount">{{ comments.amount }} Комментария</p>
      <div class="comment-input">
        <img src="../../../assets/img/user_avatar.png" alt="user logo">
        <input v-model="commentInput.input" type="text" placeholder="Оставить отзыв...">
      </div>
    </div>

    <div class="comments">
      <section v-for="comment in comments.comments" class="comments-wrapper">
        <!--comment-->
        <div class="comment-itself">
          <img src="../../../assets/img/comment_avatar.png" alt="user avatar">
          <div class="comment-info">
            <p>{{ comment.name }}</p>
            <p class="grey-text">{{ comment.date }}</p>
            <p class="comment-desc">{{ comment.text }}</p>
          </div>
        </div>
        <!--comment reply-->
        <div v-for="reply in comment.reply" class="comment-reply">
          <img src="../../../assets/img/admin_logo.png" alt="admin avatar">
          <div class="comment-r-info">
            <p class="grey-background">TopBreyns - Поддержка</p>
            <p class="grey-text">{{ reply.date }}</p>
            <p class="comment-desc">{{ reply.text }}</p>
          </div>
        </div>
      </section>
    </div>

    <button v-if="loadMore" class="load-more" @click="loadFunction">Показать ещё</button>
  </main>
</template>

<script setup>
import {ref} from "vue"

const commentInput = ref({input: ''})
defineProps({
  comments: Object,
  loadFunction: Function,
  loadMore: Boolean
})
</script>