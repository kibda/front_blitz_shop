import Image from "next/image";
import Login from "@/components/component/login";
import Shop from "@/components/component/shop";
import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <><Navbar /><Shop /></>
   // <Login />
  );
}
