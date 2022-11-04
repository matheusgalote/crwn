import "./index.styles.scss";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../../helpers/form/form-input";
import Button from "../../helpers/button";
import { useState } from "react";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(defaultFields);
  const { email, password } = formData;

  const reset = () => {
    setFormData(defaultFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      reset();
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        alert("Passoword is wrong!");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found!");
      }
      console.log(error);
    }
  };

  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
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
          <div className="buttons">
            <Button children="Signin" buttonType="inverted" type="submit" />
            <Button
              children="Login Google"
              buttonType="google"
              type="submit"
              submitHandle={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
