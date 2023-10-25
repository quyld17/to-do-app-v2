import { useEffect, useState } from "react";
import { handleGetTasks } from "./api/handlers/GetTasks";
import { handleAddTask } from "./api/handlers/AddTask";
import Task from "./utils/Variables";

import React from "react";
import { Button, Input, Space, message } from "antd";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    handleGetTasks()
      .then((data: any) => {
        setTaskList(data);
      })
      .catch((error: any) => {
        console.log("Error getting delivery address: ", error);
      });
  }, []);

  function handleAdd(e: any) {
    e.preventDefault();
    handleAddTask(task)
      .then(() => {
        message.success("Add successfully");
      })
      .catch((error: any) => {
        console.log("Error getting delivery address: ", error);
      });
    setTask("");
    // handleAfterAdd();
  }

  // function handleAfterAdd() {
  //   setTask("");
  // }

  return (
    <>
      <Space.Compact style={{ width: "50%" }}>
        <Input
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
      </Space.Compact>

      {taskList.map((task) => (
        <>
          <div>ID: {task._id}</div>
          <div>Note: {task.note}</div>
        </>
      ))}
    </>
  );
}
