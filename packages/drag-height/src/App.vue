<script setup lang="ts">
  import { ref } from 'vue';
  import draggable from 'vuedraggable';

  const values = [
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'eee',
    'fff',
    'ggg',
    'hhh',
    'iii',
    'jjj',
    'kkk',
    'lll',
    'mmm',
  ];

  const initList = ['aaa', 'bbb', 'ccc', 'ddd'];

  const list = ref(initList);

  // 加一行
  // 此处有一BUG，最后一行上移之后，再新增一行时，新增一行会在倒数第二行
  const handleClick = () => {
    const len = list.value.length;
    list.value.push(values[len]);
  };
</script>

<template>
  <button @click="handleClick">加一行</button>
  <div class="div-1">
    <draggable
      :list="list"
      item-key="index"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element, index }">
        <div class="list-group-item">
          <span class="li-1-span-1">{{ index }}</span>
          <span class="li-1-span-2">{{ element }}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="less" scoped>
  .div-1 {
    position: relative;
    height: 100vh;
    width: 100vw;

    .ul-1 {
      margin: 8px auto;
      width: fit-content;
    }

    .li-1 {
      margin-bottom: 4px;
      padding: 8px;
      width: 200px;
      border: 1px solid lightgray;
      text-align: left;

      .li-1-span-1 {
        margin-right: 4px;
        padding: 4px 8px;
        background: lightcyan;
        cursor: move;
      }
    }
  }

  .blue-background-class {
    box-shadow: 5px 5px lightcoral;
  }
  .list-group {
    margin: 8px auto;
    width: fit-content;
  }

  .li-1-span-1 {
    margin-right: 4px;
    padding: 4px 8px;
    background: lightcyan;
    cursor: move;
  }

  .list-group-item {
    margin-bottom: 4px;
    padding: 8px;
    width: 200px;
    border: 1px solid lightgray;
    text-align: left;
  }
</style>
