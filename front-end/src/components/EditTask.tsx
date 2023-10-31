import { message } from "antd";
import handleEditTask from "@/api/handlers/EditTask";
import handleGet from "./GetTasks";
import Task from "../utils/Variables";

export default function handleEdit(editedTask: Task, setTaskList: any) {
  handleEditTask(editedTask)
    .then(() => {
      message.success("Add successfully");
      handleGet(setTaskList);
    })
    .catch((error: any) => {
      message.error("Error adding task: ", error);
    });
}
