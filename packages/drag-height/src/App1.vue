<script setup lang="ts">
  import { getCurrentInstance, onMounted, ref } from 'vue';
  import Sortable from 'sortablejs';

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

  const initList = [
    {
      value: 'aaa',
      index: 0,
    },
    // {
    //   value: 'bbb',
    //   index: 1,
    // },
    // {
    //   value: 'ccc',
    //   index: 2,
    // },
    // {
    //   value: 'ddd',
    //   index: 3,
    // },
    // {
    //   value: 'eee',
    //   index: 4,
    // },
  ];

  const list = ref(initList);
  const dragEl = ref<HTMLElement | null>(null);

  const curInstance = getCurrentInstance();

  onMounted(() => {
    if (dragEl.value) {
      new Sortable(dragEl.value, {
        animation: 150,
        ghostClass: 'blue-background-class',
        // 结束拖拽
        onUpdate: function (/**Event*/ evt: any) {
          const { oldIndex, newIndex } = evt;
          // 只想修改 list 里面的 index, 不修改 list 顺序

          // console.log('oldIndex', oldIndex);
          // console.log('newIndex', newIndex);

          // 从上往下拖
          if (oldIndex < newIndex) {
            list.value.forEach((item) => {
              if (item.index < oldIndex) {
                return;
              }
              if (item.index === oldIndex) {
                item.index = newIndex;
                return;
              }
              if (item.index <= newIndex) {
                item.index -= 1;
                return;
              }
            });
          }
          // 从下往上拖
          else {
            list.value.forEach((item) => {
              if (item.index < newIndex) {
                return;
              }
              if (item.index === oldIndex) {
                item.index = newIndex;
                return;
              }
              if (item.index <= oldIndex) {
                item.index += 1;
                return;
              }
            });
          }

          curInstance?.proxy?.$forceUpdate();
        },
      });
    }
  });

  // 加一行
  // 此处有一BUG，最后一行上移之后，再新增一行时，新增一行会在倒数第二行
  const handleClick = () => {
    const len = list.value.length;
    list.value.push({
      value: values[len],
      index: len,
    });
  };
</script>

<template>
  <button @click="handleClick">加一行</button>
  <div class="div-1">
    <ul ref="dragEl" class="ul-1">
      <li
        class="li-1"
        :data-id="index"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="li-1-span-1">{{ item.index }}</span>
        <span class="li-1-span-2">{{ item.value }}</span>
      </li>
    </ul>
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
</style>
