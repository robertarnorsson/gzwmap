import { LoaderFunction, redirect } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async () => {
  return redirect("https://www.paypal.com/donate/?hosted_button_id=MG4RA9V5VULLG");
};