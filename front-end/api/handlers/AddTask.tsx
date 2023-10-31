import { message } from "antd";
import postMethodAPI from "../methods/Post";

export async function handleAddTask(note: string) {
  return new Promise((resolve, reject) => {
    const task = {
      note,
      time: new Date().toString().slice(0, 24),
    };

    const endpoint = "/notes";
    postMethodAPI(
      task,
      endpoint,
      (data: any) => {
        resolve(data);
      },
      (error: any) => {
        reject(error);
        message.error(error);
      }
    );
  });
}
