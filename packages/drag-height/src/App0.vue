<script setup lang="ts">
  import { ref } from 'vue';

  const dragEl = ref<HTMLElement | null>(null);

  const handleMouseDown = (payload: MouseEvent) => {
    // console.log('handleMouseDown--payload', payload);

    document.addEventListener('mousemove', onMouseMove);
  };

  const handleMouseUp = (payload: MouseEvent) => {
    // console.log('handleMouseUp--payload', payload);

    document.removeEventListener('mousemove', onMouseMove);
  };

  const handleMouseLeave = (payload: MouseEvent) => {
    // console.log('handleMouseUp--payload', payload);

    document.removeEventListener('mousemove', onMouseMove);
  };

  function onMouseMove(evt: MouseEvent) {
    // console.log('onMouseMove--evt', evt);

    let height;
    if (dragEl.value?.clientHeight) {
      height = dragEl.value.clientHeight - evt.movementY;

      dragEl.value.style.height = `${height}px`;
    }
  }
</script>

<template>
  <div class="div-1">
    <div class="div-1-1" ref="dragEl">
      <div class="div-1-1-1" @mouseleave="handleMouseLeave">
        <div
          class="div-1-1-1-1"
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .div-1 {
    position: relative;
    height: 100vh;
    width: 100vw;
    background: pink;

    .div-1-1 {
      position: absolute;
      bottom: 0;
      height: 300px;
      width: 100%;
      background: lightblue;

      .div-1-1-1 {
        padding: 32px;
        position: absolute;
        top: -36px;
        left: 50%;
        transform: translateX(-50%);
        cursor: row-resize;
      }

      .div-1-1-1-1 {
        width: 32px;
        height: 8px;
        background: lightcyan;
      }
    }
  }
</style>
