<template>
  <div class="root-container">
    <main class="container">
      <HeaderCom/>
      <Content/>
    </main>
    <FooterCom/>
  </div>
</template>

<script setup>
import HeaderCom from "./components/Header/HeaderCom.vue";
import FooterCom from "./components/Footer/FooterCom.vue";
import Content from "./pages/Content.vue";
</script>
