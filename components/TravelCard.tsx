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
    <div className="flex text-start gap-8 shadow-lg rounded-md w-full bg-slate-500 text-white overflow-hidden">
      <Image alt="mendoza" height={200} src={PaisajeImg} width={200} />
      <div className="grid items-center px-2">
        <h1>{title ?? ""}</h1>
        <p>{content ?? ""}</p>
        <span>{author ?? ""}</span>
      </div>
    </div>
  );
}
