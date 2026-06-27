import Image from "next/image";
import { Lock, Star } from "lucide-react";
import type { LmsCourse } from "@/lib/site-data";
import { ctaRoute } from "@/lib/site-data";
import { Button } from "./Button";

export function CourseCard({ course }: { course: LmsCourse }) {
  const isL1 = !course.locked;

  return (
    <div className="lms-card-wrapper snap-start shrink-0 flex w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] lg:min-w-[calc(25%-18px)] xl:w-[calc(25%-18px)] xl:min-w-[calc(25%-18px)]">
      <div
        className="lms-card group flex flex-col justify-between rounded-xl p-4 transition-[background-color,border-color,box-shadow,transform] duration-500 ease-out hover-fine:scale-[1.03] hover-fine:-translate-y-1.5 hover-fine:shadow-[0_20px_40px_rgba(0,0,0,0.15)] w-full backdrop-blur-md hover-fine:backdrop-blur-2xl bg-surface border border-border text-ink-primary shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-brand-soft/5">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover-fine:scale-110"
          />
          {/* Lock Overlay for locked courses */}
          {course.locked && (
            <div className="absolute inset-0 bg-brand/30 backdrop-blur-[2px] flex items-center justify-center">
              <div className="bg-brand/90 text-white rounded-full p-2.5 shadow-md">
                <Lock className="size-4" />
              </div>
            </div>
          )}
        </div>

        {/* Meta Content */}
        <div className="flex flex-col flex-grow mt-3">
          {/* Course Level Category */}
          <span className="text-eyebrow font-medium tracking-[0.13em] uppercase text-accent">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-base font-bold leading-[1.3] text-ink-primary mt-1 line-clamp-2 min-h-[42px] transition-colors duration-200 group-hover-fine:text-accent">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-sm-ui font-semibold leading-[1.4] text-ink-secondary mt-1">
            {course.instructor}
          </p>

          {/* Rating Row */}
          <div className="mt-2 flex items-center gap-1">
            <span className="text-sm-ui font-bold leading-[1.4] text-amber-700">{course.rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < Math.floor(course.rating);
                return (
                  <Star
                    key={i}
                    className={`size-3 ${isFilled ? "fill-amber-500 text-amber-500" : "text-border"
                      }`}
                  />
                );
              })}
            </div>
            <span className="text-eyebrow font-medium tracking-[0.13em] uppercase text-ink-secondary font-sans">
              ({course.reviewsCount})
            </span>
          </div>

          {/* Subtitle / Focus */}
          <p className="mt-2.5 text-sm-ui font-medium leading-[1.4] italic text-ink-secondary line-clamp-1 border-t border-border pt-2">
            {course.subtitle}
          </p>
        </div>

        {/* Price and Action Footer */}
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-sm-ui font-extrabold leading-[1.4] text-ink-primary">{course.price}</span>
            {course.originalPrice && (
              <span className="text-sm-ui font-medium leading-[1.4] line-through text-ink-secondary ml-1.5">
                {course.originalPrice}
              </span>
            )}
          </div>

          {/* Action button */}
          {isL1 ? (
            <Button
              href={ctaRoute}
              showHudCorners={false}
              className="py-1 px-3 text-[10px] rounded-lg tracking-widest"
            >
              Enroll
            </Button>
          ) : (
            <span className="text-eyebrow font-semibold tracking-[0.13em] uppercase text-ink-secondary bg-canvas px-2.5 py-1.5 rounded-lg border border-border">
              Locked
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
