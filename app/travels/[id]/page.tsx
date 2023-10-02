import Image from "next/image";

import PaisajeImg from "@/assets/paisaje.jpg";
import {getTravelById} from "@/app/actions";

export default async function TravelByIdPage({params}: {params: {id: string}}) {
  const data = await getTravelById(params.id);

  return (
    <main className="max-w-[800px] text-white w-full justify-center text-center mx-auto py-2">
      <div className="grid justify-center mt-10 gap-y-10">
        <h1 className="text-3xl font-bold">{data?.props?.title}</h1>
        <Image alt="mendoza" className="rounded-lg" height={300} src={PaisajeImg} width={300} />

        <div className="grid gap-y-2">
          <p>Content: {data?.props?.content}</p>
          <span>Author: {data?.props?.author?.name}</span>
        </div>
      </div>
    </main>
  );
}
