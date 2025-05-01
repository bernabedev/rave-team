import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const ParallaxSection = () => {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="relative">
        <ParallaxLayer offset={0} speed={-0.7}>
          {/* <div
            id="bottom"
            className="w-full bg-[url('/images/bottom.png')] bg-no-repeat bg-cover bg-center"
          ></div> */}
          <img id="bottom" src="/images/bottom.png" className="w-full"></img>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={-0.15}>
          {/* <div
            id="assets"
            className="w-full h-[700px] bg-[url('/images/assets.png')] bg-contain bg-no-repeat bg-center"
          ></div> */}
          <img
            id="bottom"
            src="/images/assets.png"
            className="absolute w-full"
          ></img>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
