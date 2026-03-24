import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const VIDEO_URL = "https://pzaz.tv/videos/hero-banner.mp4";

const VideoPlayer = () => {
  return (
    <PageLayout>
      <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="font-lato font-black text-3xl md:text-4xl text-foreground">
              Pzaz – Demo Video
            </h1>
            <p className="text-muted-foreground text-lg">
              See how Pzaz transforms the filmmaking process from concept to delivery.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex justify-center">
            <Button asChild size="xl">
              <a href={VIDEO_URL} download="pzaz-demo.mp4">
                ↓ Download Video
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VideoPlayer;
