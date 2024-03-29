import { prismaClient } from "@/lib/prisma";

interface ProductDetailPageProps{
    params:{
        slug: string,
    }
}
const ProdictDetailPage = async({params: {slug}}: ProductDetailPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
    })
    if (!product) {
        return null;
    }

    return (  
        <div className="">
            <h1>{product.name}</h1>
        </div>
    );
}
 
export default ProdictDetailPage;