<template>
  <CommentsCom :load-more="loadMore" :comments='comments' :load-function="load"/>
</template>

<script setup>
import CommentsCom from "../components/Content/Comments/CommentsCom.vue";
import {ref} from "vue"

function load() {
  if (loadMore.value === true) {
    comments.value.comments.push({
      id: 5,
      name: 'KKomol',
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
      reply: [
        {id: 6, date: '1 день назад', text: 'Нет ребят я конечно все понимаю таких фильмов'}
      ]
    },)
    loadMore.value = false
  }
}

const loadMore = ref(true)
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