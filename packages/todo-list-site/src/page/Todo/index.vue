<template>
  <section class="h-full overflow-auto w-[50%] mx-auto flex flex-col">
    <main class="flex-1">
      <draggable :list="todoList" item-key="index" class="py-2" ghost-class="ghost">
        <template #item="{ element, index }">
          <div
            :class="[
              'mt-1 p-2 border rounded cursor-pointer flex items-center justify-between',
              { 'bg-gray-50': curIndex === index },
            ]"
          >
            <div class="w-max-[calc(100%-120px)] flex items-center" @click="handleClick4(index)">
              <move-icon class="mr-2 cursor-move" />
              <label class="mr-1 px-1 rounded bg-red-100">{{ index + 1 }}</label>
              <label class="truncate"> {{ element.content }}</label>
            </div>
            <div>
              <add-icon class="p-1 border rounded mr-1 cursor-pointer" size="28px" @click="handleClick1(index)" />
              <delete-icon class="p-1 border rounded cursor-pointer" size="28px" @click="handleClick2(index)" />
            </div>
          </div>
        </template>
      </draggable>
    </main>
    <footer class="bg-gray-50 p-2">
      <task-info v-if="curIndex > -1" :task-info="todoList[curIndex]" />
      <div v-else class="flex items-center justify-center">
        <t-button class="!mr-2" variant="outline" @click="handleClick5">离线保存</t-button>
        <t-button variant="outline" disabled @click="handleClick6">在线保存</t-button>
      </div>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { MoveIcon, AddIcon, DeleteIcon } from 'tdesign-icons-vue-next';
import { Button as TButton, MessagePlugin } from 'tdesign-vue-next';
import draggable from 'vuedraggable';
import dayjs from 'dayjs';
import localforage from 'localforage';
import { ITodoListItem } from './type';
import TaskInfo from './TaskInfo.vue';

const data = await localforage.getItem<string>('todoListOutline');

const initTodoList: ITodoListItem[] = data ? JSON.parse(data) : [];

const todoList = reactive<ITodoListItem[]>(initTodoList);
const curIndex = ref(-1);

watchEffect(() => {
  if (todoList.length === 0) {
    const newItem = createNewItem();
    todoList.push(newItem);
    curIndex.value = 0;
  }
});

// 新增
const handleClick1 = (index: number) => {
  const newIndex = index + 1;

  const newItem = createNewItem();

  todoList.splice(newIndex, 0, newItem);

  curIndex.value = newIndex;
};

// 删除
const handleClick2 = (index: number) => {
  if (index === curIndex.value) {
    curIndex.value = -1;
  }

  todoList.splice(index, 1);
};

// 选中任务
const handleClick4 = (index: number) => {
  curIndex.value = index === curIndex.value ? -1 : index;
};

// 离线保存
const handleClick5 = () => {
  localforage.setItem<string>('todoListOutline', JSON.stringify(todoList));
};

// 在线保存
const handleClick6 = () => {
  MessagePlugin.info('还没做后端QAQ');
};

function createNewItem() {
  const newItem: ITodoListItem = {
    uuid: uuidv4(),
    status: 0,
    startTM: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    endTM: dayjs().add(2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
  };

  return newItem;
}
</script>
