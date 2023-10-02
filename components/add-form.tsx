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
    <button aria-disabled={pending} type="submit">
      Add
    </button>
  );
}

export default function AddForm() {
  const [state, formAction] = useFormState(createTravel, initialState);

  return (
    <form action={formAction} className="grid gap-2 max-w-[500px] mx-auto">
      <label htmlFor="title">Enter Travel</label>
      <input required id="title" name="title" type="text" />
      <input required id="content" name="content" type="text" />
      <SubmitButton />
      <p aria-live="polite" className="" role="status">
        {state?.message}
      </p>
    </form>
  );
}
