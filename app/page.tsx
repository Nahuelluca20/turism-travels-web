import Link from "next/link";

import AddForm from "@/components/add-form";
import TravelCard from "@/components/travel-card";

import {getData} from "./actions";

export default async function Home() {
  const data = await getData();

  return (
    <main className="max-w-[800px] w-full justify-center text-center mx-auto pt-2 pb-10">
      <h1 className="text-5xl w-full mt-12 text-white">Post Travels</h1>
      <span className="text-lg w-full py-2 text-gray-400">Post here your favorites travels</span>
      <section className="mt-10">
        <AddForm />
        <section className="mt-10 grid gap-6 px-5 lg:px-0 ">
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
      </section>
    </main>
  );
}
