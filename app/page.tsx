import Image from "next/image";
import { Header, Footer } from "@/components/ui";
import { ImageSlider } from "@/components/ImageSlider";

export default function Home() {
  const images = [
    "https://picsum.photos/seed/1/800/500",
    "https://picsum.photos/seed/2/800/500",
    "https://picsum.photos/seed/3/800/500",
    "https://picsum.photos/seed/4/800/500",
    "https://picsum.photos/seed/5/800/500",
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <main className="flex flex-col items-center justify-center gap-8 pt-24 sm:pt-32">
            <ImageSlider images={images} alt="Product images" />
            <h1 className="text-4xl font-bold">Welcome to My App</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              This is a simple Next.js application with a responsive header and an
              image slider that supports zoom and smooth transitions.
            </p>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
