//components
import Header from "components/Header";
import Footer from "components/Footer";
import ShortURLCreator from "components/ShortURLCreator";
import LandingPageContent from "components/LandingPageContent";

//antd
import { Divider } from "antd";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="lg:container lg:mx-auto flex flex-col justify-center fade-in-one"
        style={{
          height: "90vh",
        }}
      >
        <ShortURLCreator />
      </section>
      <section className="lg:container lg:mx-auto flex flex-col justify-center m-5 fade-in-one-half">
        <LandingPageContent />
      </section>

      <Divider plain />
      <Footer />
    </>
  );
}
