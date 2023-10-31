import { message } from "antd";
import handleDeleteTask from "../api/handlers/DeleteTask";

export default function handleDelete(id: string) {
  handleDeleteTask(id)
    .then(() => {
      message.success("Delete successfully");
    })
    .catch((error: any) => {
      message.error("Error deleting task: ", error);
    });
}
