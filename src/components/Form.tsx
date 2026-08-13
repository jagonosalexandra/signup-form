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
    const newErrors = validate(formData);
    setError(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  function validate(data: User): FormErrors {
    const newErrors: FormErrors = {};

    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    if (data.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";

    return newErrors;
  }

  return (
    <div className="form-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleOnSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            placeholder="e.g. John Doe"
          />
          {error.name && <span className="error-text">{error.name}</span>}
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
          {error.email && <span className="error-text">{error.email}</span>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
          />
          {error.password && (
            <span className="error-text">{error.password}</span>
          )}
        </label>

        <button type="submit" id="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Form;
