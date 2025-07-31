import { experience } from "../common/data";

function formatDate(date: Date): string {
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

export default function Experience() {
  return (
    <section className="py-10 px-4 md:px-8 max-w-4xl mx-auto relative">
      <h1 className="text-xl font-bold mb-6">Experience.</h1>
      <div className="relative border border-[var(--cardbg)] p-6 rounded-xl">
        {/* Corner borders */}
        <div className="pointer-events-none absolute inset-0 transition animate-pulse">
          {/* Top-left */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[var(--card-border)] rounded-tl-xl" />
          {/* Top-right */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[var(--card-border)] rounded-tr-xl" />
          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[var(--card-border)] rounded-bl-xl" />
          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[var(--card-border)] rounded-br-xl" />
        </div>

        {/* Content */}

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start flex-wrap gap-y-1"
            >
              <div>
                <h1 className="text-2xl font-semibold">{item.companyName}</h1>
                <p className="text-base text-muted-foreground">{item.role}</p>
              </div>

              <p className="text-sm text-muted-foreground">
                {formatDate(item.start)} - {formatDate(item.end)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
