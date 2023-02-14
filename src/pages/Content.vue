<template>
  <VideoLesson/>
  <CommentsCom :load-more="loadMore" :comments='comments' :load-function="load"/>
  <RecommendedCourse :movies="movieDb"/>
</template>

<script setup>
import {ref} from "vue"
import CommentsCom from "../components/Content/Comments/CommentsCom.vue";
import RecommendedCourse from "../components/Content/RecommendedCourse/RecommendedCourse.vue";
import VideoLesson from "../components/Content/VideoLesson/VideoLesson.vue";
import commentsDb from "../service/db/commentsDb.js";
import movieDb from "../service/db/movieDb.js";

function load() {
  comments.value.comments.push(comments.value.comments[0])
  loadMore.value = false
}

const loadMore = ref(true)
const comments = ref({...commentsDb})
</script>