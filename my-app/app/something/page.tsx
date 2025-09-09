import About from "../about/page";
import { redirect } from "next/navigation";

export default function Something() {
    redirect('/'); 


  return (
    <About />
  );
}
