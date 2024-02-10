"use client";

// ** Import React
import { useRef } from "react";

// ** Import Actions
import { addTodo } from "@/actions/actions";

// ** Import Elements
import Button from "../elements/Button";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  const action = async (formData: FormData) => {
    // reset form
    ref.current?.reset();

    // validation

    // do
    const result = await addTodo(formData);

    if (result?.error) {
      alert(result.error);
    } else {
      alert("success add todo");
    }
  };

  return (
    <form ref={ref} action={action} className="flex gap-2">
      <input
        type="text"
        name="name"
        placeholder="Add your todo..."
        className="border px-3 py-2 focus:outline-sky-600 rounded-lg w-full"
      />

      <Button />
    </form>
  );
};

export default Form;
