import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";
import Test from "../navi/[slug]/client_test";
export default function Home() {
  return (
    <main>
      <Drawer>
        <Test initialIndex={0} length={10} type="people" />
      </Drawer>
      <Footer />
    </main>
  );
}
