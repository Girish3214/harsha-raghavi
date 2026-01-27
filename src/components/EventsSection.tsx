import { IEvent } from "@/lib/models/Invite";
import { motion } from "framer-motion";
import Image from "next/image";

const EventsSection = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      {/* Event Details - Vertical Timeline */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* Central Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {events?.map((event: any, idx: number) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative flex items-center md:justify-between ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(233,178,52,0.6)]" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                >
                  <div className="p-8 border border-primary/10 rounded-3xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group relative overflow-hidden">
                    {/* Decorative gradient blob */}
                    <div
                      className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 ${isEven ? "translate-x-1/2" : "-translate-x-1/2"}`}
                    />

                    <h3 className="text-3xl text-primary mb-3 font-heading italic relative z-10">
                      {event.title}
                    </h3>
                    <p className="font-bold text-lg text-foreground mb-4 font-opensans relative z-10">
                      {event.date} <span className="text-primary mx-2">•</span>{" "}
                      {event.time}
                    </p>
                    <div className="w-full h-px bg-primary/10 mb-4" />
                    <p className="text-foreground/80 leading-relaxed relative z-10 font-light">
                      {event.location}
                    </p>
                    <p className="mt-4 text-sm italic text-muted-foreground relative z-10">
                      {event.description}
                    </p>

                    {/* Decorative Icons matching the sketch */}
                    <div
                      className={`absolute bottom-4 ${isEven ? "left-4" : "right-4"} flex gap-2 opacity-10`}
                    >
                      <Image
                        src="/images/bride.png"
                        alt="bride"
                        width={70}
                        height={70}
                        // className="w-8 h-auto"
                      />
                      <Image
                        src="/images/groom.png"
                        alt="groom"
                        width={70}
                        height={70}
                        // className="w-8 h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the other side to keep balance */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { EventsSection };
