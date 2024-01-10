"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import ProductListe from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 mt-4"
        sizes="100vw"
        alt="até 55% de Desconto só este mês"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-6 px-5">
        <p> OFERTAS</p>
      </div>
      <div className="mt-8">
        <ProductListe  product={deals}/>
      </div>
    </div>
  );
  // tempo : aula 2 => 01:19:41
}
