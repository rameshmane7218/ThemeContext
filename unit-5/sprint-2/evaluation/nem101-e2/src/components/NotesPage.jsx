import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotesPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [note, setNote] = useState({});
  const userId = localStorage.getItem("userId");
  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://notes-app-nem101-e2-evaluation.herokuapp.com/user/${userId}/notes`,
        note
      )
      .then((r) => {
        console.log(r.data);
        getData(userId);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (userId, id) => {
    console.log(userId, id);
    axios
      .delete(
        `https://notes-app-nem101-e2-evaluation.herokuapp.com/user/${userId}/notes/${id}`
      )
      .then((r) => {
        console.log(r.data);
        getData(userId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
    getData(userId);
  }, [userId]);
  const getData = (userId) => {
    axios
      .get(
        `https://notes-app-nem101-e2-evaluation.herokuapp.com/user/${userId}/notes`
      )
      .then((r) => {
        setData(r.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>NotesPage</h1>
      <div>
        <form action="" onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="note"
            placeholder="Enter note"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="label"
            placeholder="Enter label"
            onChange={handleOnChange}
          />

          <button>Submit</button>
        </form>
      </div>
      <div className="notespageGrid">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item._id}>
              <p>Title: {item.title}</p>
              <p>Note: {item.note}</p>
              <p>Label: {item.label}</p>
              <button onClick={() => handleDelete(item.userId, item._id)}>
                delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesPage;
