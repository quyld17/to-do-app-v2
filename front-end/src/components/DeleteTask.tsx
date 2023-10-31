import { message } from "antd";
import handleDeleteTask from "../../api/handlers/DeleteTask";
import handleGet from "./GetTasks";

export default function handleDelete(id: string, setTaskList: any) {
  handleDeleteTask(id)
    .then(() => {
      message.success("Delete successfully");
      handleGet(setTaskList);
    })
    .catch((error: any) => {
      message.error("Error deleting task: ", error);
    });
}
