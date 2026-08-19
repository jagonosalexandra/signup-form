# SIGNUP FORM

This signup form is built with React + TypeScript. It provides a user registration interface that accepts username, email and password.

![Signup Form Screenshot](src/assets/signup-form-screenshot.png)

It has the following features:

- **Form Validation** - It checks whether the input is empty, or when it doesn't meet the requirements specified for that input.
  - The username must not be empty and must at least be 3 characters long
  - The email must not be empty and must contain `@` character
  - The password must at least be 8 characters long
  - The confirm password and password must match
- **Signup Confirmation** - A modal appears to confirm that the user has successfully signed up.

## Tech / Tools

- React JS + TypeScript
- Vite
- CSS
- Node JS

## Setup

```
git clone git@github.com:jagonosalexandra/signup-form.git
cd signup-form
npm install
```

## Usage

```bash
npm run dev
```
