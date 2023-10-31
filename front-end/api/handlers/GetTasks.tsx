import getMethodAPI from "../methods/Get";
import Task from "../../src/utils/Variables";

import { message } from "antd";

export default async function handleGetTasks(): Promise<Task[]> {
  return new Promise<Task[]>((resolve, reject) => {
    const endpoint = "/notes";

    getMethodAPI(
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
