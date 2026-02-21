import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Java Programming",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "Database Management System",
    issuer: "University Project",
    year: "2025",
  },
  {
    title: "React Advanced Concepts",
    issuer: "Online Course",
    year: "2025",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certifications.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + certifications.length) % certifications.length,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              Certificates
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto relative">
          <div className="glass p-10 rounded-3xl glow-border text-center">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-3">
              {certifications[activeIdx].title}
            </h3>

            <p className="text-muted-foreground mb-2">
              {certifications[activeIdx].issuer}
            </p>

            <p className="text-primary font-medium">
              {certifications[activeIdx].year}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {certifications.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
