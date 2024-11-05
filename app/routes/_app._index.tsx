import type { MetaFunction } from "@remix-run/cloudflare";
import { LZMarker } from "~/components/custom/lzmarker";
import Map from "~/components/map/Map";
import { LZs } from "~/lib/data";

export const meta: MetaFunction = () => {
  return [
    { title: "Gray Zone Warfare Map" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex w-full items-center justify-center">
      <Map />
      {LZs.map((lz) => (
        <LZMarker key={lz.id} position={lz.position} />
      ))}
    </div>
  );
}
