import Image from "next/image";

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
    <main className="min-h-screen justify-between py-10 px-28">
      <span className="text-lg w-full py-2 text-gray-400">Feed</span>
      <h1 className="text-3xl w-full mt-12 text-white">Public Feed</h1>
    </main>
  );
}
