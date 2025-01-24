import Domain from "@/components/Domain";
import Drives from "@/components/Drives";
import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
    <Nav/>
    <Header/>
    <Mission/>
    <Domain/>
    <Drives/>
    </div>
  );
}
