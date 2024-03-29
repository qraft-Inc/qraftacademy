import Hero1 from "../lib/HomePage/ParallaxHero/Hero1";
import Hero2 from "../lib/HomePage/ParallaxHero/Hero2";

export default function ParallaxHero() {
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png)",
        }}
      >
        <Hero1 />
      </div>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dwa3soopc/image/upload/v1677600066/qraft%20/mikelya-fournier-4iG91rr92Ks-unsplash_lwamc8.jpg)",
        }}
      >
        <Hero2 />
      </div>
    </>
  );
}
