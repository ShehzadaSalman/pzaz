import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const VIDEO_URL = "https://storage.googleapis.com/wowzers-261318.appspot.com/website/videos/Pzaz%20Demo-Final%20cut.mp4";

const VideoPlayer = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(VIDEO_URL);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pzaz-demo.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setDownloading(false);
    }
  };

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
            <Button size="xl" onClick={handleDownload} disabled={downloading}>
              {downloading ? "Downloading…" : "↓ Download Video"}
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VideoPlayer;

