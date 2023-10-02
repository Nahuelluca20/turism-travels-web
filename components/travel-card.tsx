import Image from "next/image";

import PaisajeImg from "@/assets/paisaje.jpg";

export default function TravelCard({
  title,
  content,
  author,
}: {
  title: string;
  content: string;
  author: string;
}) {
  return (
    <div className="grid md:flex text-start md:gap-8 shadow-lg rounded-md w-full bg-slate-500 text-white overflow-hidden">
      <Image
        alt="mendoza"
        className="w-full md:w-[200px]"
        height={200}
        src={PaisajeImg}
        width={200}
      />
      <div className="grid items-center px-2 py-2 md:py-0">
        <h1>{title ?? ""}</h1>
        <p>{content ?? ""}</p>
        <span>{author ?? ""}</span>
      </div>
    </div>
  );
}
