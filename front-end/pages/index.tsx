import { useEffect, useState } from "react";
import handleGetTasks from "../api/handlers/GetTasks";
import handleAdd from "../src/components/AddTask";
import handleDelete from "../src/components/DeleteTask";
import Task from "../src/utils/Variables";

import React from "react";
import { Button, Input, Space } from "antd";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const handleAddTaskClick = () => {
    handleAdd(task, setTask);
  };

  const handleDeleteTaskClick = (id: string) => {
    handleDelete(id);
  };

  useEffect(() => {
    handleGetTasks()
      .then((data: any) => {
        setTaskList(data);
      })
      .catch((error: any) => {
        console.log("Error getting tasks: ", error);
      });
  }, [handleAddTaskClick, handleDeleteTaskClick]);

  return (
    <>
      <Space.Compact style={{ width: "30%" }}>
        <Input
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="primary" onClick={handleAddTaskClick}>
          Add
        </Button>
      </Space.Compact>

      {taskList.map((task) => (
        <>
          <div>ID: {task._id}</div>
          <div>Note: {task.note}</div>
          <div>Date created: {task.time}</div>
          <Button
            type="primary"
            onClick={() => handleDeleteTaskClick(task._id)}
          >
            Delete
          </Button>
          <br></br>
          <br></br>
        </>
      ))}
    </>
  );
}
