import { useState } from "react";
import Modal from "./Modal";

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function Form() {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<FormErrors>({});
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    setOpenModal(true);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  function validate({
    username,
    email,
    password,
    confirmPassword,
  }: User): FormErrors {
    const newErrors: FormErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must at least be 3 characters long";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Please include an '@' in the email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  }

  return (
    <div className="form-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleOnSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleOnChange}
            placeholder="e.g. johndoe"
          />
          {error.username && (
            <span className="error-text">{error.username}</span>
          )}
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

        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleOnChange}
          />
          {error.confirmPassword && (
            <span className="error-text">{error.confirmPassword}</span>
          )}
        </label>

        <button type="submit" id="signup-btn">
          Sign Up
        </button>
      </form>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Form;
