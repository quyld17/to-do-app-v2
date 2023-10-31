import getMethodAPI from "../methods/Get";
import Task from "../../src/utils/Variables";

export default async function handleGetTasks(): Promise<Task[]> {
  return new Promise<Task[]>((resolve, reject) => {
    const endpoint = "/notes";

    getMethodAPI(
      endpoint,
      (data: any) => {
        resolve(data);
      },
      (error: Object) => {
        reject(error);
      }
    );
  });
}
