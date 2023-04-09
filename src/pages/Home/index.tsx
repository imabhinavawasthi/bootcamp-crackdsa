import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Button } from "../../common/Button";
import { Row } from "antd";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <iframe
        src="https://lu.ma/embed-checkout/evt-3tjoViBrO2pgLNb"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      {/* <iframe
        src="https://lu.ma/crackdsa"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
        style={{ border: "1px solid #bfcbda8", borderRadius: "4px" }}

      ></iframe> */}
      {/* <iframe
        src="https://lu.ma/embed-checkout/evt-nsiCjDl42pqNlAo"
        width="100%"
        height="550"
        frameBorder="0"
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
      ></iframe> */}
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <Row justify="center" align="middle">
        <h3>Upcoming Sessions</h3>
        <iframe
          src="https://lu.ma/embed-events/usr-bN7GXGXTMNgeuQq"
          width="100%"
          height="230"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
          style={{ border: "1px solid #bfcbda8", borderRadius: "4px" }}

        ></iframe>
      </Row>



      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <Row justify="center" align="middle">
        <Button>
          <a style={{ color: "white" }} href="https://lu.ma/crackdsa" target="_blank">Explore Masterclasses</a>
        </Button>
      </Row>
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
