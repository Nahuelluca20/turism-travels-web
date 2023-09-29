import TravelCard from "@/components/TravelCard";
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
    <main className="max-w-[800px] w-full justify-center text-center mx-auto py-2">
      <h1 className="text-5xl w-full mt-12 text-white">Travels Feed</h1>
      <span className="text-lg w-full py-2 text-gray-400">Feed for your favorites travels</span>
      <section className="mt-10 grid gap-6">
        {data &&
          data?.props.map((post) => (
            <TravelCard
              key={post.id}
              author={post?.author?.name ?? ""}
              content={post?.content ?? ""}
              title={post?.title ?? ""}
            />
          ))}
      </section>
    </main>
  );
}
