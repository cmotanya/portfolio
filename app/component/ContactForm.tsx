import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSendEmailSchema, sendEmailSchema } from "../utils/types";
import { zodResolver } from "@hookform/resolvers/zod";

function ContactForm({ accessKey }: { accessKey: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TSendEmailSchema>({ resolver: zodResolver(sendEmailSchema) });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  /*  Submits the form data to the server. */
  const onSubmit: SubmitHandler<TSendEmailSchema> = async (data) => {
    const formData = new FormData();
    formData.append("access_key", accessKey);

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    /*  Try...await function that checks for response and errors from the server. */
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSuccess(true);
        setMessage(res.message);
      } else {
        setIsSuccess(false);
        setMessage("Oops, something went wrong!");
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage("Network error: Please check your internet connection.");
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        {/* Checks if form is submitted successfully */}
        {!isSubmitSuccessful && (
          <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="z-50 mx-auto flex w-full flex-col gap-3"
          >
            <input
              {...register("name")}
              type="text"
              placeholder="enter name..."
              name="name"
              autoComplete="name"
              className={`rounded-md bg-transparent py-2 ps-4 text-slate-300 ring-2 ring-slate-700 placeholder:text-slate-500 focus-within:outline-none focus-within:ring-slate-500`}
            />
            {errors.name && (
              <span
                role="alert"
                className="-mt-2 text-sm font-semibold text-red-500"
              >{`${errors.name.message}`}</span>
            )}

            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="enter email..."
              autoComplete="email"
              className={`rounded-md bg-transparent py-2 ps-4 text-slate-300 ring-2 ring-slate-700 transition-all placeholder:text-slate-500 focus-within:outline-none focus-within:ring-slate-500`}
            />
            {errors.email && (
              <span
                role="alert"
                className="text-dangerColor -mt-2 text-sm font-semibold"
              >{`${errors.email.message}`}</span>
            )}

            <input
              {...register("mobile")}
              type="tel"
              name="mobile"
              placeholder="enter telephone..."
              autoComplete="tel"
              className={`rounded-md bg-transparent py-2 ps-4 text-slate-300 ring-2 ring-slate-700 transition-all placeholder:text-slate-500 focus-within:outline-none focus-within:ring-slate-500`}
            />
            {errors.mobile && (
              <span
                role="alert"
                className="-mt-2 text-sm font-semibold text-red-500"
              >{`${errors.mobile.message}`}</span>
            )}

            <textarea
              {...register("textarea")}
              cols={15}
              rows={4}
              name="textarea"
              placeholder="enter message..."
              className={`resize-none rounded-md bg-transparent px-4 py-1 text-slate-300 ring-2 ring-slate-700 transition-all placeholder:text-slate-500 focus-within:outline-none focus-within:ring-slate-500`}
            />
            {errors.textarea && (
              <span
                role="alert"
                className="-mt-2 text-sm font-semibold text-red-500"
              >{`${errors.textarea.message}`}</span>
            )}

            {/*  Submit button. */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primaryColor flex justify-center rounded-full px-6 py-2 text-slate-100 transition-all  disabled:bg-slate-500 md:self-end ${
                Object.keys(errors).length > 0
                  ? "select-none bg-slate-500"
                  : "bg-blue-800"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>

      {/*  Success message. */}
      {isSubmitSuccessful && isSuccess && (
        <div className="flex flex-col items-center space-y-10 pt-2">
          <svg
            width="100"
            height="100"
            className="text-green-300"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>

          <div>
            <div className="flex flex-col justify-center space-y-3">
              <h3 className="text-center">{message}</h3>
              <button
                onClick={() => reset()}
                className="font-semibold text-green-500 hover:underline"
              >
                Go back.
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  Error message. */}
      {isSubmitSuccessful && !isSuccess && (
        <div className="flex flex-col items-center space-y-10 pt-2">
          <svg
            width="97"
            height="97"
            viewBox="0 0 97 97"
            className="text-red-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
              stroke="CurrentColor"
              strokeWidth="3"
            />
          </svg>

          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-center">{message}</h3>
            <button
              onClick={() => reset()}
              className="font-semibold text-red-500 hover:underline"
            >
              Try again!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
