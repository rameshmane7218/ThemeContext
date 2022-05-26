import React from "react";

const initialValue = {
  name: "",
  username: "",
  password: "",
  age: "",
  isIndian: false,
};
const Form = () => {
  const [form, setForm] = React.useState(initialValue);
  const ref = React.useRef();
  const pass = React.useRef();

  const handleChange = (e) => {
    // console.log(e);
    let { type, name, value, checked, files } = e.target;
    console.log(type, name, value, checked, files);

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      console.log(files);
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    if (!form.name) ref.current.focus();
    else if (!form.password) pass.current.focus();
  };

  //   React.useEffect(() => {
  //     console.log(form);
  //   }, [form]);

  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <label htmlFor=""> Name :</label>
        <input
          ref={ref}
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />

        <label htmlFor=""> Age :</label>
        <input
          type="text"
          name="age"
          value={form.age}
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <br />

        <label htmlFor=""> Email :</label>
        <input
          type="email"
          name="username"
          value={form.username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <br />

        <label htmlFor=""> Password :</label>
        <input
          ref={pass}
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <div>
          <label htmlFor="">City :</label>
          <select name="city" onChange={handleChange}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
        </div>
        <input
          type="checkbox"
          name="isIndian"
          checked={form.isIndian}
          onChange={handleChange}
        />
        <label htmlFor="">: Is indian </label>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="">Male </label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <label htmlFor="">Female </label>
          </div>
        </div>
        <div>
          <label htmlFor=""> User Resume :</label>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
