"use client";
// @ts-expect-error
import {experimental_useFormState as useFormState} from "react-dom";
import {experimental_useFormStatus as useFormStatus} from "react-dom";

import {createTravel} from "@/app/actions";

const initialState = {
  title: "",
  content: "",
};

function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className="bg-green-500 text-white font-semibold mx-auto rounded-md w-32 py-2"
      type="submit"
    >
      Add
    </button>
  );
}

export default function AddForm() {
  const [state, formAction] = useFormState(createTravel, initialState);

  return (
    <form action={formAction} className="grid gap-4 max-w-[300px] mx-auto">
      <label className="text-white font-bold" htmlFor="title">
        Enter Travel
      </label>
      <input
        required
        className="py-2 px-3 rounded-md outline-none"
        id="title"
        name="title"
        placeholder="title"
        type="text"
      />
      <input
        required
        className="py-2 px-3 rounded-md outline-none"
        id="content"
        name="content"
        placeholder="travel description"
        type="text"
      />
      <SubmitButton />
      <p aria-live="polite" className="" role="status">
        {state?.message}
      </p>
    </form>
  );
}
