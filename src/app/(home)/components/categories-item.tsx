"use client"
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icons";
import { Category } from "@prisma/client";


interface CategoryProps{
    category: Category,
}

const CategoriesItem = ({category} : CategoryProps ) => {
    
    return (  
        <Badge 
        className="py-3 flex justify-center items-center gap-2 rounded-lg"
        variant={"outline"}>
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="font-bold text-xs">{category.name}</span>
        </Badge>
    );
}
 
export default CategoriesItem;