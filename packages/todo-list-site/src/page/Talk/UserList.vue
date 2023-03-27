<template>
  <ul class="border p-1 pt-0 m-2 mt-3 h-[50%] overflow-auto">
    <li
      v-for="(item, index) in talkList"
      :key="index"
      class="p-2 mt-2 border rounded hover:cursor-pointer hover:bg-gray-50"
      @click="handleClick1(item, index)"
    >
      {{ item.talkName }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { v4 as uuidV4 } from 'uuid';
import { useTalkStore } from '@/store/talk';
import { TalkListItem } from './type';

const talkStore = useTalkStore();

const initTalkList: TalkListItem[] = [];
for (let i = 0; i < 10; i++) {
  initTalkList.push(createTalkItem());
}
const talkList = ref<TalkListItem[]>(initTalkList);

const curRoomIndex = ref(-1);
const handleClick1 = (item: TalkListItem, index: number) => {
  curRoomIndex.value = index;

  talkStore.setRoom(item.uuid);
};

function createTalkItem() {
  const newItem = {
    uuid: uuidV4(),
    talkName: `user+${Math.floor(Math.random() * 100)}`,
    createTM: 'dwa',
    createById: 'dss',
    createByName: '测试一',
    menberIds: ['1', '2'],
  };

  return newItem;
}
</script>
