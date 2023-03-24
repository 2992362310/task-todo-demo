<template>
  <aside class="w-[200px]">
    <ul>
      <li
        v-for="(item, index) in talkList"
        :key="index"
        class="p-2 mt-2 mr-2 border rounded hover:cursor-pointer hover:bg-gray-50"
        @click="handleClick1(item, index)"
      >
        {{ item.talkName }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTalkStore } from '@/store/talk'; // 能确定是 tsconfig.json 配置的问题，不知道为什么没起作用
import { TalkListItem } from './type';

const talkStore = useTalkStore();

const initTalkList: TalkListItem[] = [];
for (let i = 0; i < 5; i++) {
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
    uuid: '1',
    talkName: `room+${Math.floor(Math.random() * 100)}`,
    createTM: 'dwa',
    createById: 'dss',
    createByName: '测试一',
    menberIds: ['1', '2'],
  };

  return newItem;
}
</script>
