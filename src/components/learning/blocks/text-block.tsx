import type { TextBlock as TextBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type TextBlockProps = {
  block: TextBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

type TextContentSegment =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

function parseTextContent(content: string): TextContentSegment[] {
  const segments: TextContentSegment[] = [];
  const paragraphLines: string[] = [];
  let listItems: string[] = [];

  function flushParagraph() {
    const text = paragraphLines.join(" ").trim();

    if (text.length > 0) {
      segments.push({ type: "paragraph", text });
    }

    paragraphLines.length = 0;
  }

  function flushList() {
    if (listItems.length > 0) {
      segments.push({ type: "list", items: listItems });
    }

    listItems = [];
  }

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();

    if (line.length === 0) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return segments;
}

export function TextBlock({ block, isCompleted, isRequired, onComplete }: TextBlockProps) {
  const contentSegments = parseTextContent(block.content);

  return (
    <section className="border-l border-fs-border py-2 pl-5 sm:pl-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold text-fs-text">{block.title}</h3>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <div className="mt-3 max-w-3xl space-y-4 text-base leading-8 text-fs-text-soft">
        {contentSegments.map((segment, index) => {
          if (segment.type === "paragraph") {
            return <p key={`${block.id}-paragraph-${index}`}>{segment.text}</p>;
          }

          return (
            <ul key={`${block.id}-list-${index}`} className="space-y-2 pl-5">
              {segment.items.map((item, itemIndex) => (
                <li key={`${block.id}-list-${index}-item-${itemIndex}`} className="list-disc pl-1">
                  {item}
                </li>
              ))}
            </ul>
          );
        })}
      </div>

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Saya paham"
        onComplete={onComplete}
      />
    </section>
  );
}
