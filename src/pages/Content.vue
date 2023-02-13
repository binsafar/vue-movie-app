<template>
  <CommentsCom :load-more="loadMore" :comments='comments' :load-function="load"/>
  <RecommendedCourse :movies="movies"/>
</template>

<script setup>
import {ref} from "vue"
import CommentsCom from "../components/Content/Comments/CommentsCom.vue";
import RecommendedCourse from "../components/Content/RecommendedCourse/RecommendedCourse.vue";
import firstImg from "../assets/img/recvideos/first.png"
import secondImg from "../assets/img/recvideos/second.png"

function load() {
  comments.value.comments.push(comments.value.comments[0])
  loadMore.value = false
}

const loadMore = ref(true)
const movies = [
  {
    id: 1,
    img: firstImg,
    author: 'Rober Reffikin',
    lessons: 32,
    duration: 4,
    type: 'Программа',
    desc: 'Как генеральный директор и основатель Compass Роберт Реффкин использовал.'
  },
  {
    id: 2,
    img: secondImg,
    author: 'Daniel Pink',
    isAvailable: 'Скоро...',
    desc: 'Как генеральный директор и основатель Compass Роберт Реффкин использовал.'
  },
  {
    id: 3,
    img: firstImg,
    author: 'Daniel Pink',
    isAvailable: 'Скоро...',
    desc: 'Как генеральный директор и основатель Compass Роберт Реффкин использовал.'
  },
  {
    id: 4,
    img: secondImg,
    author: 'Daniel Pink',
    isAvailable: 'Скоро...',
    desc: 'Как генеральный директор и основатель Compass Роберт Реффкин использовал.'
  },
]
const comments = ref({
  amount: 32,
  comments: [
    {
      id: 1,
      name: 'KKomol',
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
      reply: [
        {id: 1, date: '1 день назад', text: 'Нет ребят я конечно все понимаю таких фильмов'}
      ]
    },
    {
      id: 2,
      name: 'KKomol',
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
    },
    {
      id: 3,
      name: 'KKomol',
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
      reply: [
        {id: 1, date: '1 день назад', text: 'Нет ребят я конечно все понимаю таких фильмов'}
      ]
    },
    {
      id: 4,
      name: 'KKomol',
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
    },
  ]
})
</script>