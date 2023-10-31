import handleGetTasks from "../../api/handlers/GetTasks";

export default function handleGet(setTaskList: any) {
  handleGetTasks()
    .then((data: any) => {
      setTaskList(data);
    })
    .catch((error: any) => {
      console.log("Error getting tasks: ", error);
    });
}
