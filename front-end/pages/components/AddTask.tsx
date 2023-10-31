import { message } from "antd";
import { handleAddTask } from "../api/handlers/AddTask";

export default function handleAdd(task: string, setTask: any) {
  if (task.trim() === "") {
    return;
  }
  handleAddTask(task)
    .then(() => {
      setTask("");
      message.success("Add successfully");
    })
    .catch((error: any) => {
      message.error("Error adding task: ", error);
    });
}
