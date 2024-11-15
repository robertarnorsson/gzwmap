import { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "GZW Map - Settings" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Settings() {
  return (
    <div>
      
    </div>
  )
}