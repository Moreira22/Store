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
        className="h-auto w-full"
        sizes="100vw"
        alt="até 55% de Desconto só este mês"
      />
      <div className="mt-8 px-s">
        <Categories />
      </div>
      <div className="mt-2">
        <p> OFERTAS</p>
      </div>
      <div className="mt-8">
        <ProductListe  product={deals}/>
      </div>
    </div>
  );
  // tempo : aula 2 => 00:44:56
}
