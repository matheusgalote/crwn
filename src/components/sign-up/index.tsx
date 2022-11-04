import React, { ChangeEvent, useState, useContext, useEffect } from "react";
import * as yup from "yup";
import Button from "../../helpers/button";
import FormInput from "../../helpers/form/form-input";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { UserContext } from "../../context/user.context";
import "./index.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("Passowrd is required").min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const reset = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handelSubmit = async (event: any) => {
    event.preventDefault();

    if (!(await loginSchema.isValid({ email, password, confirmPassword }))) {
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user?.user, { displayName });

      reset();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email já está em uso! Insira outro.");
      } else {
        alert(`Error: ${error.code}`);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          changeHandler={handleChange}
          value={displayName}
          name="displayName"
        />
        <FormInput
          label="Email"
          type="email"
          changeHandler={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          changeHandler={handleChange}
          value={password}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          changeHandler={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button children="Signup" buttonType="inverted" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
