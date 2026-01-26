import { Phone } from "lucide-react";

export default function PrimaryButton() {
  return (
    <>
      <a
        href=""
        className="bg-primary text-white inline-flex items-center gap-2 font-semibold px-3 py-4 rounded-lg"
      >
        <Phone /> (312) 555-0147
      </a>
    </>
  );
}
