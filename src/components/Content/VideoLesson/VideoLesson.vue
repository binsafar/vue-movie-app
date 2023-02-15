<template>
  <main class="root-video">
    <!--video content-->
    <div class="left-side">
      <img class="left-video" :src="lessonDb.img" alt="main">
      <div class="left-side-wrapper">
        <!--left side info-->
        <div class="left-video-content">
          <p class="left-video-title">{{ lessonDb.lessonIn }}</p>
          <p class="left-video-header">{{ lessonDb.lessonName }}</p>
          <p class="left-video-desc grey-text">{{ lessonDb.lessonDesc }}</p>
        </div>
        <!--mobile content-->
        <div class="mobile-content">
          <button>
            <img src="../../../assets/icon/lesson_icons/play_btn.svg" alt="play">
            След. Урок
          </button>
          <button>
            <img src="../../../assets/icon/lesson_icons/save_btn.svg" alt="save">
            Отменить
          </button>
          <button>
            <img src="../../../assets/icon/lesson_icons/comment_btn.svg" alt="comment">
            Коментарии
          </button>
          <button>
            <img src="../../../assets/icon/lesson_icons/show_lesson_btn.svg" alt="show lessons modal">
            Все уроки
          </button>
        </div>
        <!--right side button-->
        <div class="right-video-content">
          <button class="first-ch"><img src="../../../assets/icon/bookmark.svg" alt=""></button>
          <button><img src="../../../assets/icon/comments.svg" alt=""></button>
        </div>
      </div>
    </div>

    <!--list of lessons-->
    <div class="right-side">
      <!--lessons-->
      <div v-for="info in lessonDb.lessons" class="right-lessons">
        <p class="r-lessons-header">{{ info.name }}</p>
        <div v-for="lesson in info.lessons"
             :class="isActive ===  lesson.id ? 'active-back right-lesson-info': 'right-lesson-info'"
             @click="setActive(lesson.id)">
          <!--        <div v-for="lesson in info.lessons" :class="" @click="setActive(lesson.id)">-->
          <div class="rli-wrapper">
            <p class="r-lessons-title">{{ lesson.name }}</p>
            <p class="r-lessons-title-d grey-text">{{ lesson.duration }}</p>
          </div>
          <p v-if="isActive === lesson.id" class="r-lessons-desc grey-text">{{ lesson.desc }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import lessonDb from "../../../service/db/lessonDb.js";
import {ref} from "vue"

const isActive = ref(1)
const setActive = (id) => isActive.value = id
</script>