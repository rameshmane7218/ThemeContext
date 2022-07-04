import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Taskpage = () => {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("userid"));
  const [data, setData] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    if (!userid) {
      navigate("/login");
    }
    getTask();
  }, [userid]);

  const getTask = () => {
    fetch(`http://localhost:8080/user/${userid}/tasks`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(task);
    fetch(`http://localhost:8080/user/${userid}/tasks`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getTask();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Task page</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="get milk"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          ADD TASK
        </button>
        <hr />
        <div>
          {data &&
            data.length > 0 &&
            data.map((singletask) => {
              return <p key={singletask._id}>{singletask.title}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export { Taskpage };
