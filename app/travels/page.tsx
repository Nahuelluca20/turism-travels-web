"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import TravelCard from "@/components/travel-card";

import {getData} from "../actions";

export default function Page() {
  const [travels, setTravels] = useState<any>();

  async function getTravels() {
    const data = await getData();

    await setTravels(data);
  }

  useEffect(() => {
    getTravels();
  }, []);

  return (
    <main className="max-w-[800px] px-5 lg:px-0 w-full justify-center text-center mx-auto pt-2 pb-10">
      <h1 className="text-5xl w-full mt-12 text-white">Travels Feed</h1>
      <span className="text-lg w-full py-2 text-gray-400">Feed for your favorites travels</span>
      <section className="mt-10 grid gap-6">
        {travels &&
          travels?.props?.map((post: any) => (
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
