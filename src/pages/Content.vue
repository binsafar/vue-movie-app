<template>
  <CommentsCom :comments='comments' :load-function="load"/>
</template>

<script setup>
import CommentsCom from "../components/Content/Comments/CommentsCom.vue";

let loadMore = false

function load() {
  if (loadMore === false) {
    comments.comments.push({
      id: 5,
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
      reply: [
        {id: 6, date: '1 день назад', text: 'Нет ребят я конечно все понимаю таких фильмов'}
      ]
    },)
    loadMore = true
  }
  console.log(comments)
}

let comments = {
  amount: 32,
  comments: [
    {
      id: 1,
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
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
    },
    {
      id: 3,
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
      date: '2 дня назад',
      text: 'Нет ребят я конечно все понимаю таких фильмов с похожим сюжетом пруд пруди, \n' +
          'но думаю именно этот стоит посмотреть :)',
      avatar: '',
    },
  ]
}
</script>