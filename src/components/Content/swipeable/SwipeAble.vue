<template>
  <div class="right-side">
    <!--lessons-->
    <div class="right-lessons-wrapper">
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
    <!--lesson cards-->
    <div class="right-card-info">
      <div class="right-card author">
        <div class="rc-wrapper">
          <img class="teacher-img" :src="lessonDb.cardsInfo.author.img" alt="avatar">
          <p>{{ lessonDb.cardsInfo.author.name }}</p>
        </div>
      </div>

      <div class="right-card lesson-score">
        <div class="rc-wrapper">
          <p class="ls-score-title">{{ lessonDb.cardsInfo.lessonScore.completed }}
            <span class="grey-text">/ {{ lessonDb.cardsInfo.lessonScore.total }}</span>
          </p>
          <p>Уроков завершено</p>
        </div>
      </div>

      <div class="right-card lessons">
        <div class="rc-wrapper">
          <p class="lesson-number">{{ lessonDb.cardsInfo.lessons.amount }}</p>
          <p>Урока за сегодня</p>
        </div>
      </div>

      <div class="right-card student">
        <div class="rc-wrapper">
          <img :src="lessonDb.cardsInfo.student.img" alt="">
          <p>{{ lessonDb.cardsInfo.student.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import lessonDb from "../../../service/db/lessonDb.js";
import {ref} from "vue"

const isActive = ref(1)
const setActive = (id) => isActive.value = id
</script>