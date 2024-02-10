// ** Import Components
import Form from "@/components/Form";
import List from "@/components/List";

// ** Import Other
import axios from "axios";

export interface IList {
  id: string;
  name: string;
  createdAt: string;
}

const getData = async () => {
  const res = await axios.get(process.env.URL!);

  return res.data;
};

export default async function Home() {
  const lists: IList[] = await getData();

  return (
    <div className="py-10 px-5 lg:px-96 space-y-5">
      <h1 className="text-4xl text-blue-600 font-bold">
        Todo App Server Actions
      </h1>

      <Form />

      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
}
