"use client";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
interface ProductListProps{
    product: Product[],
}
const ProductListe = ({product}: ProductListProps) => {
    return ( 
        <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {product.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
        </div>
     );
}
 
export default ProductListe;
