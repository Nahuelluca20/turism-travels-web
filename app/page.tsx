import Image from "next/image";

import TravelCard from "@/components/TravelCard";

import prisma from "../lib/prisma";

async function getData() {
  const post = await prisma.post.findUnique({
    where: {
      id: String("cln0z9q440001uy2go5s4p0l6"),
    },
    include: {
      author: {
        select: {name: true},
      },
    },
  });

  return {
    props: post,
  };
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main className="max-w-[800px] w-full justify-center text-center mx-auto py-2">
      <h1 className="text-5xl w-full mt-12 text-white">Travels Feed</h1>
      <span className="text-lg w-full py-2 text-gray-400">Feed for your favorites travels</span>
      <section className="mt-10">
        <TravelCard
          author={data.props?.author?.name ?? ""}
          content={data.props?.content ?? ""}
          title={data.props?.title ?? ""}
        />
      </section>
    </main>
  );
}
