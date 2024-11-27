import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "GZW Map - About" },
    { name: "description", content: "See what gzwmap.com is and why it was made!" },
  ];
};

export default function About() {
  return (
    <div className="flex justify-center items-center grid-bg w-full h-screen">
      <h1>The about page is not finised</h1>
    </div>
  )
}