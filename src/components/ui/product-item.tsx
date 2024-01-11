"use client";
import { ProductWithTotalPrice } from "@/helpers/product";

import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductListProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductListProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4 ">
        <div className="relative flex h-[170px] w-full justify-center rounded-lg bg-accent">
          {/* <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-[90px] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        /> */}
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
              <ArrowDownIcon size={14} /> {product.discountPercentage}%
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
                <p className="text-ellipsis font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="text-ellipsis text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-ellipsis text-sm font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
