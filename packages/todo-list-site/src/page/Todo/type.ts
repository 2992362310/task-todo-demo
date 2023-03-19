export interface ITodoListItem {
  uuid: string;
  label?: string; // 标签
  status: number; // 状态
  content?: string; // 内容
  startTM?: string; // 开始时间
  endTM?: string; // 结束时间
}
