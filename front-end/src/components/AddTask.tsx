import { message } from "antd";
import handleAddTask from "../../api/handlers/AddTask";
import handleGet from "./GetTasks";

export default function handleAdd(
  task: string,
  setTask: any,
  setTaskList: any
) {
  if (task.trim() === "") {
    return;
  }
  handleAddTask(task)
    .then(() => {
      setTask("");
      message.success("Add successfully");
      handleGet(setTaskList);
    })
    .catch((error: any) => {
      message.error("Error adding task: ", error);
    });
}
