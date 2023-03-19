<template>
  <section>
    <div class="flex">
      <label class="w-[46px]">任务</label>
      <t-textarea v-model="taskInfo.content" placeholder="请输入任务内容" />
    </div>
    <div class="mt-2 flex">
      <div class="flex items-center">
        <label class="w-[62px]">状态</label>
        <t-select
          v-model="taskInfo.status"
          :options="options1"
          :popup-props="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
          placeholder="请设置状态"
          auto-width
        />
      </div>
      <div class="flex items-center">
        <label class="w-[62px]">标签</label>
        <t-select
          v-model="taskInfo.label"
          :options="options2"
          :popup-props="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
          placeholder="请设置标签"
          auto-width
          multiple
        />
      </div>
    </div>
    <div class="mt-2 flex items-center">
      <label class="w-[90px]">开始--结束</label>
      <t-date-range-picker v-model="rangeTM" enable-time-picker />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Textarea as TTextarea, Select as TSelect } from 'tdesign-vue-next';
import { isEqual } from 'lodash';

import { ITodoListItem } from './type';
import { options1, options2 } from './conf';

const props = defineProps<{ taskInfo: ITodoListItem }>();

const taskInfo = ref(props.taskInfo);
const rangeTM = [taskInfo.value.startTM, taskInfo.value.endTM];

// 此处会有性能问题
watch(props, (curVal) => {
  // console.log(curVal);
  if (!isEqual(taskInfo.value, curVal.taskInfo)) {
    taskInfo.value = curVal.taskInfo;
  }
});
</script>
