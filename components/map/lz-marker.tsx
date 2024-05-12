import { Inter } from "next/font/google";
import { lz } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function LZMarker({ map, lz }: { map: Map, lz: lz }) {
  return (
    <MapMarker
      map={map}
      position={lz.position}
    >
      <div className='lz-marker-pin'>
        <Image className='lz-marker-icon' src='/lz.jpg' quality={100} width={23} height={13} alt={lz.name}></Image>
        <span className={cn(
          inter.className,
          'lz-marker-text'
        )}>{lz.name}</span>
      </div>
    </MapMarker>
  )
}