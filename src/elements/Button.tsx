"use client";

// ** Import React
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-blue-600 py-2 px-8 text-white rounded-md disabled:bg-red-600"
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
};

export default Button;
