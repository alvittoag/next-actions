"use client";

// ** Import React
import { useFormStatus } from "react-dom";

const ButtonDelete = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-red-600 p-1 text-white text-sm rounded-lg disabled:bg-gray-800"
      disabled={pending}
    >
      Delete
    </button>
  );
};

export default ButtonDelete;
