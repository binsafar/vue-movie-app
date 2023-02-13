<template>
  <button @click="loadFunction">loaaaaaad</button>
  <main>
    <div class="comment-info">
      <p class="comment-amount">{{ comments.amount }} Комментария</p>

      <div class="comment-input">
        <img src="../../../assets/img/user_avatar.png" alt="user logo">
        <input type="text" placeholder="Оставить отзыв...">
      </div>

    </div>

    <div class="comments">
      <section v-for="comment in comments.comments" class="comments-wrapper">
        <!--comment-->
        <div class="comment-itself">
          <img src="../../../assets/img/comment_avatar.png" alt="user avatar">
          <div class="comment-info">
            <p>{{ comment.date }}</p>
            <p>{{ comment.text }}</p>
          </div>
        </div>
        <!--comment reply-->
        <div v-for="reply in comment.reply" class="comment-reply">
          <img src="../../../assets/img/admin_logo.png" alt="admin avatar">
          <div class="comment-r-info">
            <p>TopBreyns - Поддержка</p>
            <p>{{ reply.date }}</p>
            <p>{{ reply.text }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
defineProps({
  comments: Object,
  loadFunction: Function
})
</script>