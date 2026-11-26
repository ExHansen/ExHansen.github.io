import type { CSSProperties } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Database } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

type Tool = {
  name: string;
  logo?: string;
  color?: string;
  onLight?: boolean;
  onDark?: boolean;
  invertOnDark?: boolean;
  note?: string;
};

type ToolGroup = { category: string; items: readonly Tool[] };

function ToolLogo({ tool }: { tool: Tool }) {
  if (!tool.logo) {
    return <Database className="size-4 shrink-0 text-muted-foreground" aria-hidden />;
  }

  if (tool.color) {
    // Single-colour SVG painted through a CSS mask, so it can take the brand colour
    // (or the text colour when the brand colour is unreadable on that background).
    const style = {
      "--logo-light": tool.onLight === false ? "currentColor" : tool.color,
      "--logo-dark": tool.onDark === false ? "currentColor" : tool.color,
      maskImage: `url(${tool.logo})`,
      WebkitMaskImage: `url(${tool.logo})`,
      maskSize: "contain",
      WebkitMaskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
    } as CSSProperties;
    return (
      <span
        aria-hidden
        className="size-4 shrink-0 bg-[var(--logo-light)] dark:bg-[var(--logo-dark)]"
        style={style}
      />
    );
  }

  return (
    <img
      src={tool.logo}
      alt=""
      loading="lazy"
      decoding="async"
      className={cn("size-4 shrink-0 rounded-sm object-contain", tool.invertOnDark && "dark:invert")}
    />
  );
}

export default function ToolsSection() {
  const groups = DATA.tools as readonly ToolGroup[];

  return (
    <div className="flex flex-col gap-y-5">
      {groups.map((group, gi) => (
        <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 10 + gi * 0.05}>
          <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <h3 className="text-sm font-medium text-muted-foreground sm:pt-1.5">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <li
                  key={tool.name}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-3 flex items-center gap-2"
                >
                  <ToolLogo tool={tool} />
                  <span className="text-foreground text-sm font-medium">{tool.name}</span>
                  {tool.note && <span className="text-muted-foreground text-xs">({tool.note})</span>}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
