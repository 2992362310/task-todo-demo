<template>
  <section class="h-full w-[50%] border p-2 flex flex-col justify-between">
    <ul>
      <li v-for="(item, index) in messages" :key="index" class="mb-2">
        <div v-if="curUserId === item.senderId" class="flex items-center">
          <div class="flex-1 text-right mr-2 over-text">{{ item.content }}</div>
          <div class="w-36px h-36px bg-blue-100 rounded-[100%] overflow-hidden">{{ item.sendName }}</div>
        </div>
        <div v-else class="flex items-center">
          <div class="w-36px h-36px bg-blue-100 rounded-[100%] overflow-hidden">{{ item.sendName }}</div>
          <div class="flex-1 ml-2 over-text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
    <div class="flex">
      <t-input v-model="curWord" class="mr-1" @enter="handleClick" />
      <t-button variant="outline" @click="handleClick">发送</t-button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Input as TInput, Button as TButton } from 'tdesign-vue-next';
import { v4 as uuidV4 } from 'uuid';
import dayjs from 'dayjs';
import { IMessageItem } from './type';

const messages = reactive<IMessageItem[]>([createNewMessage('测试对话', 'otherId')]);
const curUserId = ref<string>('myself');

const curWord = ref<string>('');

const handleClick = () => {
  if (curWord.value) {
    const newMessage = createNewMessage(curWord.value);
    messages.push(newMessage);

    curWord.value = '';
  }
};

function createNewMessage(content: string, senderId = 'myself') {
  const newMessage = {
    uuid: uuidV4(),
    senderId,
    sendTM: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    sendName: '自己',
    reciverId: 'myself',
    reciveTM: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    reciveName: '自己',
    content,
  };

  return newMessage;
}
</script>

<style lang="less" scoped>
.over-text {
  overflow-wrap: anywhere;
}
</style>
