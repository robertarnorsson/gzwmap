
export const Item = ({ name, shortName, image, size }: { name: string, shortName?: string, image: string, size: [number, number] }) => {
  const itemSize = [size[0] * 50, size[1] * 50]

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: itemSize[0] + 5,
        height: itemSize[1] + 5
      }}
    >
      <div className="bg-neutral-800 h-full border">
        <div className="absolute top-0.25 left-1 text-[10px] font-base whitespace-nowrap overflow-hidden">
          <span className="text-[9px] inline-block">
            {shortName || name}
          </span>
        </div>
        <div className="flex items-center justify-center h-full">
          <img
            src={image}
            alt={name}
            width={itemSize[0]}
            height={itemSize[1]}
          />
        </div>
      </div>
    </div>
  )
}