import { defineStore } from 'pinia';

export interface ITalkState {
  room: string | undefined;
}

export const useTalkStore = defineStore('talk', {
  state: (): ITalkState => ({
    room: undefined,
  }),
  actions: {
    setRoom(room: string) {
      this.room = room;
    },
  },
});
