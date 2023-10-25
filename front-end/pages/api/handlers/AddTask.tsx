import { message } from "antd";
import postMethodAPI from "../methods/Post";

export async function handleAddTask(note) {
  return new Promise((resolve, reject) => {
    const task = {
      note,
      time: new Date(),
    };

    const endpoint = "/sign-in";
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
