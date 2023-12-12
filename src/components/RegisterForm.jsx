import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../utils/slices/userSlice";
import { useDispatch } from "react-redux";
import { GITHUB_USER_IMG } from "../utils/constants";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerError, setRegisterError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name should be atleast 3 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be 3 characters or more")
      .required("Required"),
  });

  const onSubmitHandler = ({ name, email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: GITHUB_USER_IMG,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setRegisterError(errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setRegisterError(errorMessage);
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
        <h1 className="font-bold text-2xl mb-4">Sign Up</h1>

        <Field
          placeholder="Name"
          id="name"
          name="name"
          type="text"
          className="p-4 my-4 mb-2 w-3/4  bg-slate-500"
        />
        <div className="text-red-500">
          <ErrorMessage name="name" />
        </div>

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
          Sign Up
        </button>

        {registerError && <div className="text-red-500">{registerError}</div>}

        <p className="mt-4">
          {"Already Registered? "}
          <u
            className="text-blue-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Sign In now
          </u>
        </p>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
