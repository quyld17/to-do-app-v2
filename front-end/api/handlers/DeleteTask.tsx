import deleteMethodAPI from "../methods/Delete";

import { message } from "antd";

export default async function handleDeleteTask(id: string) {
  return new Promise((resolve, reject) => {
    const endpoint = `/notes/${id}`;
    deleteMethodAPI(
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
