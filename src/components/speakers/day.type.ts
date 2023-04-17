import { Speaker } from "./speakers.type";

export interface Day {
    name: string;
    date: string;
    dateTime: string;
    speakers: Speaker[];
  }