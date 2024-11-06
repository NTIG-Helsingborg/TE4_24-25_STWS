import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";
import Test from "./client_test";

export default function Home() {
  return (
    <main>
      <Drawer>
        <Test index={0} length={10}/>
      </Drawer>
      <Footer />
    </main>
  );
}
