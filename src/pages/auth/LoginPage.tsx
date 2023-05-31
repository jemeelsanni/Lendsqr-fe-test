import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import SignInIllustration from "../../assets/brand/sign-in-illustration.png";
import { ReactComponent as Logo } from "../../assets/brand/logo.svg";
import { useNavigate } from "react-router-dom";
import "./_login.scss";
import * as Yup from "yup";
import { signin } from "../../redux/actions/authAction";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { userListAction } from "../../redux/actions/usersDataAction";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password must be more than 6 characters"),
  });

  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    const { email, password } = values;
    dispatch(signin(email, password, navigate));
    dispatch(userListAction());
    setSubmitting(false);
  };

  return (
    <div>
      <div className="login-page">
        <div className="svg-section">
          <div className="logo">
            <Logo />
          </div>

          <div className="illustration-container">
            <img src={SignInIllustration} alt="Sign In To Lendsqr" />
          </div>
        </div>

        <div className="form-section-container">
          <div className="form-section">
            <div className="logo">
              <Logo />
            </div>

            <div>
              <h1>Welcome!</h1>
              <p className="page-subheading">Enter details to login.</p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="input-field">
                  <div className="input-container">
                    <div className="input-field-container">
                      <Field type="email" name="email" placeholder="Email" />
                    </div>
                  </div>

                  <ErrorMessage
                    name="email"
                    component="label"
                    className="input-error"
                  />
                </div>

                <div className="input-field">
                  <div className="input-container">
                    <div className="input-field-container">
                      <Field
                        type={passwordVisible ? `text` : "password"}
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="password">
                    <span
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      className="password-visibility"
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </span>
                  </div>

                  <ErrorMessage
                    name="password"
                    component="label"
                    className="input-error"
                  />
                </div>

                <p className="forgot-password">FORGOT PASSWORD?</p>

                <button className="btn" type="submit">
                  LOG IN
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
