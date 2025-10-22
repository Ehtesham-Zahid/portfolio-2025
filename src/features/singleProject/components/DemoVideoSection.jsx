import React from "react";
import { Play, ExternalLink, Clock, Share2, Youtube } from "lucide-react";

const DemoVideoSection = () => {
  // This would typically come from props or a data source
  const videoData = {
    title:
      "Learneazy LMS - Full-Stack Next.js & Express Project with VidoCipher, Stripe & More",
    thumbnail: "", // Video thumbnail image
    youtubeUrl: "https://youtube.com/watch?v=example",
    duration: "15:30",
    author: "Ehtesham Zahid",
    role: "Software Engineer",
    watchLaterUrl: "#",
    shareUrl: "#",
  };

  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              Demo Video
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          {/* Video Player */}
          <div className="group relative rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Video Header */}
            <div className="flex items-center justify-between p-4 border-b border-secondary-light dark:border-secondary-dark bg-background/90 dark:bg-background-dark/90">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {videoData.author[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text1-light dark:text-text1-dark">
                    {videoData.author}
                  </p>
                  <p className="text-xs text-text2 dark:text-text1-dark/70">
                    {videoData.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-text2 dark:text-text1-dark/70 hover:text-text1-light dark:hover:text-text1-dark transition-colors">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs">Watch later</span>
                </button>
                <button className="flex items-center gap-2 text-text2 dark:text-text1-dark/70 hover:text-text1-light dark:hover:text-text1-dark transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>

            {/* Video Thumbnail/Player */}
            <div className="relative aspect-video bg-gradient-to-br from-secondary-light/20 to-transparent dark:from-secondary-dark/20">
              {videoData.thumbnail ? (
                <img
                  src={videoData.thumbnail}
                  alt={videoData.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-light dark:text-primary-dark">
                        {videoData.title[0]}
                      </span>
                    </div>
                    <p className="text-text2 dark:text-text1-dark/60 text-sm">
                      Video thumbnail coming soon
                    </p>
                  </div>
                </div>
              )}

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group/play h-20 w-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1 group-hover/play:scale-110 transition-transform" />
                </button>
              </div>

              {/* Video Duration */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                {videoData.duration}
              </div>

              {/* YouTube Button */}
              <div className="absolute bottom-4 left-4">
                <a
                  href={videoData.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="text-sm font-medium">Watch on YouTube</span>
                </a>
              </div>
            </div>

            {/* Video Title */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text1-light dark:text-text1-dark leading-tight">
                {videoData.title}
              </h3>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-text2 dark:text-text1-dark/80 max-w-2xl mx-auto">
              Watch this comprehensive demo to see Learneazy LMS in action,
              featuring all the key features and functionality we've built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
