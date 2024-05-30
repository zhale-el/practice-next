"use client";

import { useForm } from "react-hook-form";

const ReactFormOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const formSubmit = () => {
    const formData = {
      userName: watch("name"),
      email: watch("email"),
      password: watch("password"),
    };
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className=" bg-white shadow-md  shadow-gray-400 rounded flex flex-col justify-center p-6 w-full mt-12  gap-8"
    >
      <div>
        <input
          className="outline-none border-2 rounded-md border-gray-300 focus:border-blue-300 w-full p-2 mb-6 mt-6"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.name && errors.name.type == "required" && (
          <div className="text-red-600 text-sm mb-2 text-center">
            please enter your name
          </div>
        )}
        {errors.name && errors.name.type == "minLength" && (
          <div className="text-red-600 text-sm mb-2 text-center">
            Username must be more than 6
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="outline-none border-2 rounded-md border-gray-300 focus:border-blue-300 w-full p-2 mb-6"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && errors.email.type == "required" && (
          <div className="text-red-600 text-sm mb-2 text-center">
            please enter your email
          </div>
        )}

        <input
          type="password"
          placeholder="password"
          className="outline-none border-2 rounded-md border-gray-300 focus:border-blue-300 w-full p-2 mb-6"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />

        {errors.password && errors.password.type == "required" && (
          <div className="text-red-600 text-sm mb-2 text-center">
            please enter your password
          </div>
        )}
        {errors.password && errors.password.type == "minLength" && (
          <div className="text-red-600 text-sm mb-2 text-center">
            Password must be more than 8
          </div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-400 rounded-md text-gray-800 text-xl font-semibold w-full text-center py-3 mt-3 transition-all duration-500 hover:bg-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReactFormOne;
