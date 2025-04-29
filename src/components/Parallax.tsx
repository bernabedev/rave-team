import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const ParallaxSection = () => {
  return (
    <Parallax pages={2} style={{ top: "500", left: "0" }}>
      <ParallaxLayer offset={0.3} speed={-0.7}>
        <div
          id="supernovas"
          className="w-full h-[700px] bg-[url('/images/Supernovas.png')] bg-no-repeat bg-contain bg-center"
        ></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.15}>
        <div
          id="venus"
          className="w-full h-[700px] bg-[url('/images/Venus-Disgustada.png')] bg-contain bg-no-repeat bg-center"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.1}>
        <div
          id="carmen"
          className="w-full h-[700px] bg-[url('/images/Carmen-Risa.png')] bg-no-repeat bg-contain bg-center"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.2}>
        <div
          id="twinky"
          className="w-full h-[700px] bg-[url('/images/Twinky-Risa.png')] bg-no-repeat bg-contain bg-center"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3}>
        <div
          id="guille"
          className="w-full h-[700px] bg-[url('/images/Guille-Relata.png')] bg-no-repeat bg-contain bg-center"
        ></div>
      </ParallaxLayer>

      {/* capa logo */}
      <ParallaxLayer offset={0.5} speed={1}>
        <div
          id="logo"
          className="w-full h-[700px] bg-[url('/images/Logo-Rave.png')] bg-no-repeat bg-contain bg-center"
        ></div>
      </ParallaxLayer>
    </Parallax>
  );
};
