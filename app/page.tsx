'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Download, RefreshCw, Sparkles } from 'lucide-react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    // API call would go here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `coloring-page-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Coloring Pages
              </h1>
              <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Transform your imagination into beautiful coloring pages using AI. Describe what you&apos;d like to see, and we&apos;ll generate it for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 border-slate-200 dark:border-slate-800 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Describe Your Coloring Page
                      </label>
                      <Textarea
                        placeholder="e.g., A peaceful garden with flowers, butterflies, and a winding path through trees..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="resize-none h-32 border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Tips: Be specific about elements, style (simple, detailed, cartoon), and the mood you want.
                      </p>
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={isLoading || !prompt.trim()}
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white h-11"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Generate
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200 dark:border-slate-800 shadow-lg h-full">
                <CardContent className="p-6 h-full">
                  {generatedImage ? (
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="flex-1 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                        <Image
                          src={generatedImage}
                          alt="Generated coloring page"
                          fill
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button
                          onClick={handleDownload}
                          variant="default"
                          className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          onClick={() => setGeneratedImage(null)}
                          variant="outline"
                          className="flex-1"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          New
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                          <Sparkles className="w-10 h-10 text-slate-400 dark:text-slate-600" />
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                          Your coloring page will appear here
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                          Describe what you&apos;d like and click Generate
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI&ndash;Powered</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Create unlimited coloring pages with advanced AI technology
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-3">
                  <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Easy Download</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Save your pages in high quality ready to print
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Regenerate</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Not happy? Easily generate new versions of your design
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
