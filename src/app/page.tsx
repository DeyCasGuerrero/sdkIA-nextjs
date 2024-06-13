import NavBarComponent from "@/Components/NavBar/NavBar";
import SloganComponent from "@/modules/home/components/Slogan";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col justify-between ">
      <section className=" text-2xl w-full h-screen ">
        <div className="h-full relative">
          <div className="absolute bottom-0 w-full h-full ">
            <Image
              src="https://a.storyblok.com/f/274239/1456x816/aba6425720/homepage-hero.png/m/900x504/filters:format(webp):quality(70)"
              alt="img"
              width={500}
              height={300}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'blur(1px)',
                mixBlendMode: 'multiply',
                zIndex: -1,
                opacity: 0.5,
                backgroundSize: 'cover',

              }}
            ></Image>
          </div>
          <SloganComponent></SloganComponent>
        </div>
      </section>

     
    </main>
  );
}
