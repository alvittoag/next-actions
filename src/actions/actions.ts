"use server";

// ** Import Next
import { revalidatePath } from "next/cache";

// ** Import Other
import axios from "axios";

export const addTodo = async (formData: FormData) => {
  const name = formData.get("name");

  try {
    await axios.post(process.env.URL!, {
      name,
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/");
};
