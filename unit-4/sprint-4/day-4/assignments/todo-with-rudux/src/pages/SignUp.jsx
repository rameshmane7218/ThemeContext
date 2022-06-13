import React from "react";
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
let initialForm = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  description: "",
};
const SignUp = () => {
  const [form, setForm] = useState(initialForm);
    const dispatch = useDispatch();
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]: value,
    })
  }
  console.log(form);
  return (
    <div>
      Sign Up
      <form>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
