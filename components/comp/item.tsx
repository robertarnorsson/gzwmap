import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ItemProps = {
  name: string;
  imageUrl: string;
  size: number;
};

export const Item = ({
  name,
  imageUrl,
  size
}: ItemProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [scrollAnimation, setScrollAnimation] = useState<string | null>(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    const textElement = textRef.current;

    if (containerElement && textElement) {
      const isOverflow = containerElement.clientWidth < textElement.scrollWidth;
      setIsOverflowing(isOverflow);

      if (isOverflow) {
        const scrollDistance = textElement.scrollWidth - (containerElement.clientWidth - 8);
        const animationName = `scroll-${Math.random().toString(36).substring(7)}`;
        const keyframes = `
          @keyframes ${animationName} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${scrollDistance}px); }
          }
        `;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        setScrollAnimation(animationName);
      }
    }
  }, [name, size]);

  const handleMouseEnter = () => {
    if (isOverflowing && textRef.current) {
      textRef.current.style.animation = `${scrollAnimation} 6s linear infinite`;
    }
  };

  const handleMouseLeave = () => {
    if (textRef.current) {
      textRef.current.style.animation = 'none';
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        `w-[${size}px] h-[${size}px]`,
        "relative overflow-hidden"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0.5 left-1 text-[10px] font-base whitespace-nowrap overflow-hidden">
        <span
          ref={textRef}
          className="inline-block"
        >
          {name}
        </span>
      </div>
      <div className="w-full h-full bg-[#252628] border border-1 border-[#454548]">
        <Image width={size} height={size} src={imageUrl} alt={name} />
      </div>
    </div>
  );
};
