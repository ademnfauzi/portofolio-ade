import type { ISkillListItem } from "@/types";
import { SkillLevel } from "@/types";
import CardBox from "@/components/core/CardBox";
import Image from "next/image";

// Helper: Convert SkillLevel enum number to string
const getSkillLevelLabel = (level?: SkillLevel): string => {
  return level !== undefined ? SkillLevel[level] : "";
};

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <CardBox classNames="p-4 items-start justify-start rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] w-full group">
      <p className="text-lg/6 font-semibold text-center w-full">{data.title}</p>

      {data.items.length > 0 ? (
        <ul className="mt-6 w-full flex flex-col gap-2 text-sm text-[var(--textColor)]">
          {data.items.map((skill, index) => (
            <li
              key={`skill-title-${index}`}
              className="flex justify-between items-center border-b border-dashed border-[rgba(255,255,255,0.08)] pb-1"
            >
              <span className="flex items-center gap-2">
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={`icon-${skill.title}`}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                )}
                {skill.title}
              </span>
              <span className="text-xs text-[var(--textColorSoft)]">
                {getSkillLevelLabel(skill.level)}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </CardBox>
  );
};

export default SkillItem;
