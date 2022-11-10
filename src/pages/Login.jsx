import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../shared/services/api";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const send = async (formData) => {
    console.log(formData);
    localStorage.setItem("user", JSON.stringify(formData));
    const result = await API.post("users/login", formData);
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Insert your email here please",
              minLength: {
                value: 2,
                message: "email needs to have a length of 4",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Insert a valid email here",
              },
            })}
          />
          {errors.email ? (
            <>
              {errors.email.type === "required" && (
                <p>{errors.email.message}</p>
              )}
              {errors.email.type === "minLength" && (
                <p>{errors.email.message}</p>
              )}
              {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
            </>
          ) : null}
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Insert your password here please",
              minLength: {
                value: 8,
                message: "password needs to have a length of 8",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Insert a valid password",
              },
            })}
          />
        </label>
        {errors.password ? (
          <>
            {errors.password.type === "required" && (
              <p>{errors.password.message}</p>
            )}
            {errors.password.type === "minLength" && (
              <p>{errors.password.message}</p>
            )}
            {errors.password.type === "pattern" && (
              <p>{errors.password.message}</p>
            )}
          </>
        ) : null}
        <button disabled={!isValid}>Send</button>
      </form>
    </div>
  );
};

export default Login;
