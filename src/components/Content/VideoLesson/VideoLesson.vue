<template>
  <main class="root-video">
    <!--video content-->
    <div class="left-side">
      <img :src="lessonDb.img" alt="main">
      <div class="left-side-wrapper">
        <!--left side info-->
        <div class="left-video-content">
          <p class="left-video-title">{{ lessonDb.lessonIn }}</p>
          <p class="left-video-header">{{ lessonDb.lessonName }}</p>
          <p class="left-video-desc grey-text">{{ lessonDb.lessonDesc }}</p>
        </div>
        <!--right side button-->
        <div class="right-video-content">
          <button><img src="../../../assets/icon/bookmark.svg" alt=""></button>
          <button><img src="../../../assets/icon/comments.svg" alt=""></button>
        </div>
      </div>
    </div>

    <!--list of lessons-->
    <div class="right-side">
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
      <div>hello world</div>
    </div>
  </main>
</template>

<script setup>
import lessonDb from "../../../service/db/lessonDb.js";
</script>