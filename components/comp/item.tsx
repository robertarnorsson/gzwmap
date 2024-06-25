import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ItemProps = {
  name: string
  shortName: string
  imageUrl: string
  size: [number, number]
};

export const Item = ({
  name,
  shortName,
  imageUrl,
  size
}: ItemProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [scrollAnimation, setScrollAnimation] = useState<string | null>(null);

  const itemSize = [size[0] * 50, size[1] * 50]

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
  }, []);

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-crosshair">
          <div
            ref={containerRef}
            className={cn(
              `w-[${itemSize[0]}px] h-[${itemSize[1]}px]`,
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
                {shortName}
              </span>
            </div>
            <div className="w-full h-full bg-[#252628] border border-1 border-[#454548]">
              <Image width={itemSize[0]} height={itemSize[1]} src={imageUrl} alt={name} />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
