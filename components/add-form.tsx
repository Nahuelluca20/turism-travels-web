"use client";

import {experimental_useFormState as useFormState} from "react-dom";
import {experimental_useFormStatus as useFormStatus} from "react-dom";

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
    <form action={formAction}>
      <label htmlFor="travel">Enter Travel</label>
      <input id="travel" name="title" type="text" />
      <input id="travel" name="content" type="text" />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
