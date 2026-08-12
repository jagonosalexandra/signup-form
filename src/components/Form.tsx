import { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

function Form() {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<FormErrors>({});

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Sign Up</h1>

      <div className="inputs-container">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            placeholder="e.g. John Doe"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            placeholder="e.g. johndoe@example.com"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
          />
        </label>
      </div>

      <button type="submit" id="signup-btn">
        Sign Up
      </button>
    </form>
  );
}

export default Form;
