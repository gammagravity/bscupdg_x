import React, { useRef, useEffect, useState, Suspense } from "react";
import UpDogLogo from './tokenomics-updated-01.svg';
import SocialFollow from "./components/Footer"

//Components
import Header from "./components/header";
import { Section } from "./components/section";

// Page State
import state from "./components/state";

// R3F
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader } from "drei";

// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";

// import { lazy } from "react";

// import IntroContent from "./content/IntroContent.json";
// import MiddleBlockContent from "./content/MiddleBlockContent.json";
// import AboutContent from "./content/AboutContent.json";
// import MissionContent from "./content/MissionContent.json";
// import ProductContent from "./content/ProductContent.json";
// import RoadmapContent from "./content/RoadmapContent.json"
// import ContactContent from "../../content/ContactContent.json";


// const ContactFrom = lazy(() => import("../../components/ContactForm"));
// const ContentBlock = lazy(() => import("./components/ContentBlock"));
// const MiddleBlock = lazy(() => import("./components/MiddleBlock"));
// const Container = lazy(() => import("./common/Container"));
// const ScrollToTop = lazy(() => import("./common/ScrollToTop"));
// const Roadmap = lazy(() => import("../components/RoadMap") )


function Model({ url }) {
  const gltf = useGLTFLoader(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Direction light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  position,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh ref={ref} position={[0, -10, 0]}>
          <Model url={modelPath} />
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className='container'>
            <h1 className='title'>{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}

export default function App() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Header />
      <SocialFollow />
      {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>
        {/* Lights Component */}
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            bgColor='#1a75ff'
            modelPath='/updogebig2.gltf'
            position={250}>
            <span> $UPDOG</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#13146d'
            modelPath='/updoge.gltf'
            position={0}>
            <img src={UpDogLogo} alt="" />
          </HTMLContent>
          {/* <HTMLContent
            domContent={domContent}
            bgColor='#636567'
            modelPath='/.gltf'
            position={-250}>
            <span>And yes</span>
            <span>we even got</span>
            <span>monochrome!</span>
          </HTMLContent> */}
        </Suspense>
      </Canvas>
      <Loader />
      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 65}vh` }} />
      </div>
    </>
  );
}
