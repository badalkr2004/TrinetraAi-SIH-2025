import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface YouTubeVideoModalProps {
  youtubeId: string; // The ID of the YouTube video (e.g., "dQw4w9WgXcQ")
  triggerButtonText?: string; // Text for the button that opens the modal
  children?: React.ReactNode; // Optional: custom trigger element instead of a button
}

export function YouTubeVideoModal({
  youtubeId,
  triggerButtonText = "Watch Demo",
  children,
}: YouTubeVideoModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleVideoPlay = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.currentTarget;
    try {
      if (iframe.requestFullscreen) {
        // Most modern browsers
        iframe.requestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) {
        // Firefox
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        // IE/Edge
        (iframe as any).msRequestFullscreen();
      }
    } catch (e) {
      console.error("Could not activate fullscreen for iframe:", e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children ? (
          children // If a custom trigger is provided
        ) : (
          <Button variant="outline" size="lg">
            {triggerButtonText}
          </Button> // Default button trigger
        )}
      </DialogTrigger>
      <DialogContent className=" z-50 flex items-center justify-center p-4 bg-gray/90 text-white  sm:rounded-none sm:max-w-full sm:w-full h-full">
        <div className="relative w-full h-full max-w-screen-xl max-h-screen-lg flex items-center justify-center p-4 md:p-8">
          {/* Responsive iframe container for aspect ratio */}
          <div className="relative w-full max-w-[1280px] pb-[56.25%] h-0">
            {" "}
            {/* 16:9 Aspect Ratio (9/16 = 0.5625) */}
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen

              //   onLoad={handleVideoPlay}
            ></iframe>
          </div>
        </div>
        {/* The close button is handled by DialogClose,
            but shadcn/ui's DialogContent usually includes a default close button (x icon)
            if you don't explicitly remove it from the DialogContent component definition.
            If you need a custom button or explicitly want to style it, you can add it here.
            For now, the default 'X' button from shadcn/ui will work.
        */}
      </DialogContent>
    </Dialog>
  );
}
