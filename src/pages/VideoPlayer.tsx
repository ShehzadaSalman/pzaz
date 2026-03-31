import PageLayout from "@/components/layout/PageLayout";

const VIDEO_URL = "https://storage.googleapis.com/wowzers-261318.appspot.com/website/videos/Pzaz%20Demo-Final%20cut.mp4";

const VideoPlayer = () => {
  return (
    <PageLayout>
      <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
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
        </div>
      </section>
    </PageLayout>
  );
};

export default VideoPlayer;

