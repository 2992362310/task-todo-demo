export interface IMessageItem {
  uuid: string;
  senderId: string;
  sendTM: string;
  sendName: string;
  reciverId: string;
  reciveTM: string;
  reciveName: string;
  content: string;
}

export interface TalkListItem {
  uuid: string;
  talkName: string;
  createTM: string;
  createById: string;
  createByName: string;
  menberIds: string[];
}
