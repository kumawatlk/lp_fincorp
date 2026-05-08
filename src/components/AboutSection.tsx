import { useState } from "react";
import { ArrowRight, Play, Phone, BadgeDollarSign, Settings2 } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-32 py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -top-8 right-4 w-36 h-24 opacity-30 bg-[radial-gradient(hsl(245_58%_51%/_0.28)_1.4px,transparent_1.4px)] [background-size:10px_10px]" />
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="IT Consulting team" className="w-full h-[420px] object-cover" loading="lazy" width={800} height={800} />
            </div>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="absolute bottom-8 -right-5 w-16 h-16 rounded-full stats-gradient flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              aria-label="Play company video"
            >
              <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-primary mb-5">
              About Our Company ~
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground font-heading">
              Choose <span className="gradient-text">The Best</span> IT Service Company
            </h2>

            <p className="text-muted-foreground border-l-2 border-primary pl-4 mb-8 leading-relaxed max-w-xl">
              An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes;
              that&apos;s what they are supposed to do. Many IT firms struggle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-border py-6 mb-8">
              <div className="flex items-center gap-3">
                <BadgeDollarSign size={30} className="text-primary flex-shrink-0" />
                <span className="text-lg font-semibold text-foreground leading-tight">
                  Moneyback
                  <br />
                  Gurentee
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Settings2 size={30} className="text-primary flex-shrink-0" />
                <span className="text-lg font-semibold text-foreground leading-tight">
                  Technical
                  <br />
                  Support
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="btn-primary rounded-full">
                Contact Us! <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Call for help</span>
                  <span className="text-3xl font-bold font-heading text-foreground">9509069357</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">Company intro video</DialogTitle>
          {isVideoOpen && (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cwQgjq0mCdE?autoplay=1&rel=0"
                title="Company intro video"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </section>
  );
};

export default AboutSection;
