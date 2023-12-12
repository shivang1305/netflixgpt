import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
  });

  const onSubmitHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/invalid-login-credentials")
          setLoginError("Invalid email id or password");
        else setLoginError(errorMessage);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmitHandler(values);
      }}
    >
      <Form className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
        <h1 className="font-bold text-2xl mb-4">Sign In</h1>

        <Field
          placeholder="Email Address"
          id="email"
          name="email"
          type="email"
          className="p-4 my-4 mb-2 w-3/4  bg-slate-500"
        />
        <div className="text-red-500">
          <ErrorMessage name="email" />
        </div>
        <Field
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          className="p-4 my-4 mb-2 w-3/4  bg-slate-500"
        />
        <div className="text-red-500">
          <ErrorMessage name="password" />
        </div>
        <br />
        <button
          type="submit"
          className="p-4 my-4 bg-red-500 text-xl rounded-md w-3/4 mt-12"
        >
          Sign In
        </button>

        {loginError && <div className="text-red-500">{loginError}</div>}

        <div className="justify-between flex mt-1 text-xs">
          <p>Remember Me</p>
          <p>Need help?</p>
        </div>

        <p className="mt-4">
          {"New to Netflix? "}
          <u
            className="text-blue-200 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign Up now
          </u>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
