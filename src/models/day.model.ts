import { Speaker } from "@models/speaker.model";

export interface Day {
    name: string;
    date: string;
    dateTime: string;
    speakers: Speaker[];
  }