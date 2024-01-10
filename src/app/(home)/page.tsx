"use client";
import { useSession } from "next-auth/react";
import Categories from "./components/categories";
import ProductListe from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where:{
      category:{
        slug: "mouses",
      },
    },
  });

  return (
    <div className=" flex flex-col gap-8 py-8">

      <PromoBanner src="/banner-home-01.png" 
      alt="até 55% de Desconto só este mês"/>
     
      <div className="mt-3 pl-5 font-bold">
        <Categories />
      </div>

      <SectionTitle title="ofertas" />

      <div >
        <ProductListe product={deals} />
      </div>

      <PromoBanner src="/banner-home-02.png" 
      alt="até 55% de Desconto em mouses"/>
    
      <SectionTitle title="teclados" />

      <div >
        <ProductListe product={keyboards} />
      </div>

      <div >
      <PromoBanner src="/banner-home-03.png" 
      alt="até 20% de Desconto em fones"/>
      </div>

      <SectionTitle title="mouses" />

      <div >
        <ProductListe product={mouses} />
      </div>

    </div>
  );
  // tempo : aula 2 => 01:19:41
}
