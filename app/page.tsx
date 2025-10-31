import { Button } from "@/components/ui/button";
import { SparklesIcon, StarIcon, ArrowRightIcon } from "lucide-react";

const FeatureBanner = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-b">
      <SparklesIcon className="w-4 h-4 text-blue-600" />
      <span className="text-sm font-medium">
        New: Change any coloring page to any aspect ratio with AI
      </span>
      <ArrowRightIcon className="w-4 h-4 text-blue-600" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            AI coloring page generator - make printable pages in seconds
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            ColorBliss is the AI coloring page generator for kids, grownups, and anyone who loves to color.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Start for free
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              No credit card. Just creativity.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['T', 'K', 'L', 'S'].map((letter, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white"
                    style={{
                      backgroundColor: ['#9333ea', '#f97316', '#ef4444', '#10b981'][index]
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1 ml-2">
                {[1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-50" />
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              from 164 reviews
            </p>

            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Over 1,293,801 coloring pages created!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ColoringPagePreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center gap-4 md:gap-8">
            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl border-4 border-gray-800 bg-white shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-center px-4">
                    Boy eating sandwich coloring page
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl border-4 border-gray-800 bg-white shadow-2xl z-10 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-center px-4">
                    Girl on bicycle in town coloring page
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl border-4 border-gray-800 bg-white shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-center px-4">
                    Farm animals coloring page
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FeatureBanner />
      <Hero />
      <ColoringPagePreview />
    </div>
  );
}
