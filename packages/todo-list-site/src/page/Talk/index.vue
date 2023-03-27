<template>
  <section class="mt-2 h-[96%] flex justify-center">
    <aside class="w-[200px]">
      <room-list></room-list>
      <user-list></user-list>
    </aside>
    <main class="w-[50%]">
      <talk-room></talk-room>
    </main>
  </section>
</template>

<script lang="ts" setup>
import RoomList from './RoomList.vue';
import UserList from './UserList.vue';
import TalkRoom from './TalkRoom.vue';
</script>
