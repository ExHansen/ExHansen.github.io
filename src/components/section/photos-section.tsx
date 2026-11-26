import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

type Photo = { src: string; alt: string; caption?: string };

// Masonry via CSS columns: every photo keeps its own aspect ratio (nothing is cropped),
// and each one can carry a short caption so visitors know what they're looking at.
export default function PhotosSection() {
  const photos = DATA.photos as readonly Photo[];
  const { label, heading } = DATA.sections.photos;

  return (
    <section id="photos">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">{label}</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{heading}</h2>
        </div>
        <div className="columns-2 sm:columns-3 gap-3">
          {photos.map((photo, idx) => (
            <BlurFade key={photo.src} delay={BLUR_FADE_DELAY * 14 + idx * 0.05} className="mb-4 break-inside-avoid">
              <figure className="flex flex-col gap-1.5">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl border border-border object-cover"
                />
                {photo.caption && (
                  <figcaption className="text-xs leading-snug text-muted-foreground">{photo.caption}</figcaption>
                )}
              </figure>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
