import TalkRoom from './TalkRoom.vue'; import TalkList from './TalkList.vue';

<template>
  <section class="h-full flex justify-center">
    <talk-list></talk-list>
    <talk-room></talk-room>
  </section>
</template>

<script lang="ts" setup>
import TalkList from './TalkList.vue';
import TalkRoom from './TalkRoom.vue';
</script>
