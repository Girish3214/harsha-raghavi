"use client";

import { IEvent } from "@/lib/models/Invite";
import Image from "next/image";
import EventCard from "./EventCard";

const EventsSection = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-1-header-lines.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto mx-2 w-1/2"
        />
      </div>
      <section className="content-container py-20 relative">
        {/* Event Details - Vertical Timeline */}
        <Image
          src="/images/flowers-upward.png"
          alt=""
          width={500}
          height={500}
          className="absolute top-12 right-[-80px] w-80 rotate-6 pointer-events-none hidden md:block"
        />
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Central Line */}
          <svg
            className="absolute left-8 md:left-1/2 top-0 h-full -translate-x-1/2"
            width="14"
            viewBox="0 0 14 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0 C 2 40, 12 80, 7 120 C 2 160, 12 200, 7 240 C 2 280, 12 320, 7 360 C 2 400, 12 440, 7 480 C 2 520, 12 560, 7 600"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeOpacity="0.35"
            />
          </svg>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {events?.map((event: any, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={event._id}>
                  <EventCard event={event} isEven={isEven} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom-left floral ornament */}
        <Image
          src="/images/flowers-upward.png"
          alt=""
          width={500}
          height={500}
          className="absolute bottom-12 left-[-80px] w-80 -rotate-6 rotate-y-180 rotate-x-180 pointer-events-none hidden md:block"
        />
      </section>

      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-event-end.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto opacity-55 w-1/2"
        />
      </div>
    </>
  );
};

export { EventsSection };
