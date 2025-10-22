import React, { useMemo, useState } from "react";
import { Play } from "lucide-react";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    const idParam = u.searchParams.get("v");
    if (idParam) {
      return `https://www.youtube.com/embed/${idParam}?autoplay=1&rel=0`;
    }
    return null;
  } catch {
    return null;
  }
};

const DemoVideoSection = ({ project }) => {
  const videoData = project.videoData;
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = useMemo(
    () => getYouTubeEmbedUrl(videoData.youtubeUrl),
    [videoData.youtubeUrl]
  );

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

          {/* Video Card with subtle gradient border + glass background */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 dark:from-primary-dark/40 dark:to-secondary-dark/40 shadow-xl">
            <div className="relative rounded-3xl border border-secondary-light dark:border-secondary-dark bg-background/80 dark:bg-background-dark/70 backdrop-blur-md overflow-hidden">
              {/* Video area */}
              <div className="relative aspect-video">
                {isPlaying && embedUrl ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={embedUrl}
                    title="Demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : videoData.thumbnail ? (
                  <img
                    src={videoData.thumbnail}
                    alt="Demo thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-light dark:text-primary-dark">
                          ▶
                        </span>
                      </div>
                      <p className="text-text2 dark:text-text1-dark/60 text-sm">
                        Video thumbnail coming soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="group/play h-20 w-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-white ml-1 group-hover/play:scale-110 transition-transform" />
                    </button>
                  </div>
                )}
              </div>

              {/* Decorative corner glows */}
              <div className="pointer-events-none" aria-hidden>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
