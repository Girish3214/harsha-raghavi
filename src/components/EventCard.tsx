import { IEvent } from "@/lib/models/Invite";
import { motion } from "framer-motion";
import Image from "next/image";

const EventCard = ({ event, isEven }: { event: IEvent; isEven: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(233,178,52,0.6)]" />

      {/* Content Card */}
      <div
        className={`w-full md:w-[50%] pl-10 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
      >
        <div className="p-8 border border-primary/10 rounded-3xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div
            className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-32 h-32 bg-[#f3d38a] rounded-full blur-3xl -translate-y-1/2 ${isEven ? "-translate-x-1/2" : "translate-x-1/2"}`}
          />
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {event?.title?.toLowerCase() === "reception" && (
                <Image
                  src="/images/camera.png"
                  alt="camera"
                  width={100}
                  height={100}
                  className="absolute top-6 left-5 object-contain opacity-60 pointer-events-none w-20"
                />
              )}
              <h3
                className={`${isEven ? "px-18" : "px-0"} text-4xl text-primary font-heading relative z-10 ${isEven ? "md:text-right" : "md:text-left"}`}
              >
                {event.title}
              </h3>
              {event?.title?.toLowerCase()?.includes("wedding") && (
                <Image
                  src="/images/knot.png"
                  alt="knot"
                  width={100}
                  height={100}
                  className="absolute top-2 right-0 object-contain opacity-60 pointer-events-none w-32 rotate-18 translate-x-1 -translate-y-1"
                />
              )}
            </div>

            <p className="font-bold text-lg text-foreground font-opensans relative z-10">
              {event.date} <span className="text-primary mx-2">•</span>{" "}
              {event.time}
            </p>
            <div className="w-full h-px bg-primary/10 mb-8" />
            <p className="text-foreground/80 leading-relaxed relative z-10 font-light">
              {event.location}
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground relative z-10">
              {event.description}
            </p>
          </div>

          {/* Decorative Icons matching the sketch */}
          <div
            className={`absolute bottom-4 ${isEven ? "right-4 md:left-4! " : "right-4"} flex gap-0 opacity-10`}
          >
            <Image
              src="/images/bride.png"
              alt="bride"
              width={70}
              height={70}
              className="w-10 h-24"
            />
            <Image
              src="/images/groom.png"
              alt="groom"
              width={70}
              height={70}
              className="w-8 md:w-8 h-24"
            />
          </div>
        </div>
      </div>

      {/* Empty spacer for the other side to keep balance */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default EventCard;
export { EventCard };
