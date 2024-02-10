// ** Import Type
import { IList } from "@/app/page";

// ** Import Elements
import ButtonDelete from "@/elements/ButtonDelete";

// ** Import Other
import axios from "axios";
import { revalidatePath } from "next/cache";

const List = ({ list }: { list: IList }) => {
  const deleteTodo = async () => {
    "use server";

    await axios.delete(`${process.env.URL!}/${list.id}`);

    revalidatePath("/");
  };

  return (
    <ul className=" text-lg font-medium text-slate-700">
      <li className="flex items-center gap-5">
        <form action={deleteTodo}>
          <ButtonDelete />
        </form>

        <h1>{list.name}</h1>
      </li>
    </ul>
  );
};

export default List;
