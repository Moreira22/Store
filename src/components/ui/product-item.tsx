"use client";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductListProps{
    product: Product,
}
const ProductItem = ({product}: ProductListProps) => {
    return ( 
        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className="bg-accent rounded-lg h-[170px] w-[156px] justify-center">
                <Image
                src={product.imageUrls[0]}
                height={0}
                width={0}
                sizes="100vw"
                className="h-[90px] w-auto max-w-[80%]"
                style={{
                    objectFit: "contain",
                }}
                 alt={product.name}/>
            </div>
            <div>
                <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</p>
                
            </div>
            
        </div>
     );
}
 
export default ProductItem;