import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";
import Test from "../Components/TestShit/client_test";
export default function Home() {
  return (
    <main>
      <Drawer>
        <Test initialIndex={0} length={5} type="people" />
      </Drawer>
      <Footer />
    </main>
  );
}
