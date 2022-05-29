import React, { useRef } from "react";
import styles from "./Form.module.css";
import axios from "axios";
import {v4 as uuidv4} from "uuid";

const Form = ({employeeData,setEmployeeData,getData}) => {
  const [form, setForm] = React.useState({});
  // const [employeeData, setEmployeeData] = React.useState([]);

  const imgUrl = useRef(null);

  // const getData = async () => {
  //   try {
  //     let res = await axios.get("http://localhost:8080/employeeData");
  //     console.log("axios", res.data);
  //     setEmployeeData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // React.useEffect(() => {
  //   getData();
  // }, []);

  const handleOnChange = (e) => {
    const { type, name, value, files } = e.target;

    if (type === "file") {
      imgUrl.current = `URL.createObjectURL(files[0])`;
      // console.log(files[0]);
      setForm({ ...form, [name]: imgUrl.current });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    let res = await axios.post("http://localhost:8080/employeeData", form);
    
    getData();
  };
  return (
    <div className={styles.formContainer}>
      <h1>Employee Details</h1>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Name </label>
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              onChange={handleOnChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Age </label>
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              name="age"
              placeholder="Your Age"
              onChange={handleOnChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Address </label>
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              onChange={handleOnChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Department </label>
          </div>
          <div className={styles.formInput}>
            <select
              name="department"
              onChange={handleOnChange}
              className={styles.inputField1}
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="IoT">IoT</option>
              <option value="Administration">Administration</option>
            </select>
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Salary </label>
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              name="salary"
              placeholder="Your Salary"
              onChange={handleOnChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.formLabel}>
            <label> Marital Status </label>
          </div>
          <div className={styles.formInputRadio}>
            <div>
              <input
                type="radio"
                name="maritalStatus"
                value="Married"
                onChange={handleOnChange}
                className={styles.inputField}
              />
              <label htmlFor=""> Married</label>
            </div>
            <div>
              <input
                type="radio"
                name="maritalStatus"
                value="Single"
                onChange={handleOnChange}
                className={styles.inputField}
              />
              <label htmlFor=""> Single</label>
            </div>
          </div>
        </div>
        <div className={styles.profilePhoto}>
          <div>
            <div className={styles.formLabel}>
              <label> Profile Photo </label>
            </div>
            <div className={styles.formInput}>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleOnChange}
                // className={styles.inputField}
                required
              />
            </div>
          </div>
          <div className="profilePreview">
            <img
              src={
                imgUrl.current === null
                  ? "https://bit.ly/3POFmBd"
                  : imgUrl.current
              }
              alt="Profile Photo"
              height="100px"
              width="90px"
            />
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
