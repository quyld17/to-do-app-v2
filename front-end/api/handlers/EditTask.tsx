import { message } from "antd";
import putMethodAPI from "../methods/Put";
import Task from "@/src/utils/Variables";

export default async function handleEditTask(editedTask: Task) {
  return new Promise((resolve, reject) => {
    const endpoint = "/notes";
    putMethodAPI(
      editedTask,
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
