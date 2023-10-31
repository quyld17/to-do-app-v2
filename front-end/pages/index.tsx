import { useEffect, useState } from "react";
import handleAdd from "../src/components/AddTask";
import handleDelete from "../src/components/DeleteTask";
import handleGet from "@/src/components/GetTasks";
import handleEdit from "@/src/components/EditTask";
import Task from "../src/utils/Variables";

import React from "react";
import { Button, Input, Space } from "antd";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  useEffect(() => {
    handleGet(setTaskList);
  }, []);

  const handleAddTaskClick = () => {
    handleAdd(task, setTask, setTaskList);
  };

  const handleDeleteTaskClick = (id: string) => {
    handleDelete(id, setTaskList);
  };

  const startEditingTask = (task: Task) => {
    setEditedTask(task);
  };

  const saveEditedTask = () => {
    if (editedTask) {
      handleEdit(editedTask, setTaskList);
      setEditedTask(null);
    }
  };

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
          {editedTask && editedTask._id === task._id ? (
            <Space.Compact style={{ width: "20%" }}>
              <Input
                value={editedTask.note}
                onChange={(e) => {
                  const updatedTask = { ...editedTask, note: e.target.value };
                  setEditedTask(updatedTask);
                }}
              />
              <Button type="primary" onClick={saveEditedTask}>
                Save
              </Button>
            </Space.Compact>
          ) : (
            <Button type="primary" onClick={() => startEditingTask(task)}>
              Edit
            </Button>
          )}
          <br></br>
          <br></br>
        </>
      ))}
    </>
  );
}
