import { experience } from "../common/data";

function formatDate(date: Date): string {
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

export default function Experience() {
  return (
    <section className="py-12 w-full relative">
      {/* Sleek Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-1">Experience.</h1>
        <div className="w-12 h-px bg-gradient-to-r from-muted-foreground/30 to-transparent"></div>
      </div>

      {/* Thin Card Container */}
      <div className="relative border border-[var(--cardbg)] p-6 rounded-xl">
        {/* Thin Corner borders */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top-left */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--card-border)]/40 rounded-tl-lg" />
          {/* Top-right */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--card-border)]/40 rounded-tr-lg" />
          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--card-border)]/40 rounded-bl-lg" />
          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--card-border)]/40 rounded-br-lg" />
        </div>

        {/* Clean Content */}
        <div className="space-y-6 relative z-10">
          {experience.map((item, index) => (
            <div
              key={index}
              className="group hover:bg-muted-foreground/3 rounded-lg p-4 transition-all duration-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1 group-hover:text-foreground/90 transition-colors duration-200">
                    {item.companyName}
                  </h2>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-muted-foreground/8 rounded-md">
                  <div className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full"></div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {formatDate(item.start)} - {formatDate(item.end)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
