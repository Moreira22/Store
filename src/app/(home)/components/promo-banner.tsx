import { ImageProps } from "next/image";
import Image from "next/image";

const PromoBanner = ({src, alt, ...props } : ImageProps) => {
    return (
        <Image
        src={src}
        height={0}
        width={0}
        className="mt-4 h-auto w-full px-5"
        sizes="100vw"
        alt={alt}
        {...props}
      />
      );
}
 
export default PromoBanner;