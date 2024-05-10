import { redirect } from "next/navigation";

export async function GET() {
  redirect("https://www.paypal.com/donate/?hosted_button_id=MG4RA9V5VULLG")
}