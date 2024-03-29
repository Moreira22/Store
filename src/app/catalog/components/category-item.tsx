import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategotyItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategotyItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center 
      bg-category-item-gradient
      rounded-tl-lg rounded-tr-lg ">
        {/* <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: "contain",
          }}    
        /> */}
      </div>
      <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
        <p className="text-sm font-semibold text-center">{category.name}</p>
      </div>
    </div>
    </Link>
  );
};

export default CategoryItem;
