import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import { Card as MUICard, Typography, Checkbox, Button } from "@mui/material";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckbox = () => {
    let tasks = { ...taskObj };
    tasks.completed = !tasks.completed;
    updateListArray(tasks, index);
  };

  return (
    <MUICard className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div
        className="task-holder"
        style={{ textDecoration: taskObj.completed ? "line-through" : "none" }}
      >
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <Typography className="mt-3">{taskObj.Description}</Typography>

        <div className="checkbox-container">
          <Checkbox
            type="checkbox"
            checked={taskObj.completed}
            onChange={handleCheckbox}
          />
          <label>완료</label>
        </div>

        <div style={{ position: "absolute", top: "160px", left: "160px" }}>
          <Button
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          >
            edit
          </Button>
          <Button
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          >
            delete
          </Button>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </MUICard>
  );
};

export default Card;
