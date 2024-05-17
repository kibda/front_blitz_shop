import Image from "next/image";
import Login from "@/components/component/login";
import Shop from "@/components/component/shop";
import { Navbar } from "@/components/component/navbar";
import { Footer } from "@/components/component/footer";

export default function Home() {
  return (
    <div>
    <div><Navbar /></div>
    <div><Shop /></div>
   
   <div><Footer /></div>
   </div>
   // <Login />
   
  );
}
