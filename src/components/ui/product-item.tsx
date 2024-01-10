"use client";
import { ProductWithTotalPrice } from "@/helpers/product";

import Image from "next/image";
import { Badge } from "./badge";
import {  ArrowDownIcon} from "lucide-react";

interface ProductListProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductListProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[170px] justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-[90px] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
          {product.discountPercentage > 0 &&(
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
               <ArrowDownIcon size={14}/> {product.discountPercentage}%
            </Badge>

          )}
      </div>
      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="item-center flex gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold text-ellipsis">R$ {product.totalPrice.toFixed(2)}</p>
              <p className="text-xs line-through opacity-75 text-ellipsis">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ): (
            <p className="text-sm font-semibold text-ellipsis">R$ {product.totalPrice.toFixed(2)}</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
