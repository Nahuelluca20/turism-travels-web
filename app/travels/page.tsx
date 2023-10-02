import Link from "next/link";

import TravelCard from "@/components/travel-card";
import prisma from "@/lib/prisma";

async function getData() {
  const post = await prisma.post.findMany({
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

export default async function page() {
  const data = await getData();

  return (
    <main className="max-w-[800px] px-5 lg:px-0 w-full justify-center text-center mx-auto pt-2 pb-10">
      <h1 className="text-5xl w-full mt-12 text-white">Travels Feed</h1>
      <span className="text-lg w-full py-2 text-gray-400">Feed for your favorites travels</span>
      <section className="mt-10 grid gap-6">
        {data &&
          data?.props.map((post) => (
            <Link key={post.id} href={`/travels/${post.id}`}>
              <TravelCard
                author={post?.author?.name ?? ""}
                content={post?.content ?? ""}
                title={post?.title ?? ""}
              />
            </Link>
          ))}
      </section>
    </main>
  );
}
