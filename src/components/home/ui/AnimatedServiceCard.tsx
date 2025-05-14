import { animate, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/utils/cn";
import { IServiceItem } from "@/types";
import Image from "next/image";

export function AnimatedServiceCard({
  item,
}: Readonly<{ item: IServiceItem }>) {
  return (
    <Card className="z-20">
      <CardSkeletonContainer>
        <IconSkeleton item={item} />
      </CardSkeletonContainer>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </Card>
  );
}

const IconSkeleton = ({ item }: Readonly<{ item: IServiceItem }>) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted) {
        const dynamicSequence = item.icons.map((_, i) => [
          `.circle-${i + 1}`,
          { scale, transform },
          { duration: 0.8 },
        ]);
        await animate(dynamicSequence as any);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    if (item.icons.length > 0) {
      runAnimation();
    }

    return () => {
      isMounted = false;
    };
  }, [item.icons]);

  const icons = item.icons;
  const middleIndex = Math.floor(icons.length / 2);

  return (
    <div className="overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex justify-center items-center gap-2">
        {icons.map((icon, index) => {
          // Assign sizes: middle icon largest, edges smallest
          let sizeClass = "h-12 w-12";
          let imageClass = "h-6 w-6";

          if (icons.length === 2) {
            sizeClass = "h-12 w-12";
            imageClass = "h-6 w-6";
          } else if (index === middleIndex) {
            sizeClass = "h-16 w-16";
            imageClass = "h-8 w-8";
          } else if (index === 0 || index === icons.length - 1) {
            sizeClass = "h-8 w-8";
            imageClass = "h-4 w-4";
          }

          return (
            <IconContainer
              key={`icon-${index}`}
              className={`circle-${index + 1} ${sizeClass}`}
            >
              <Image
                src={icon}
                alt={`icon-${index + 1}`}
                width={144}
                height={144}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                className={`${imageClass} aspect-square`}
              />
            </IconContainer>
          );
        })}
      </div>

      {/* Sparkle effect */}
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-[var(--primaryColor)] to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full mx-auto overflow-hidden rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] py-2 tracking-wide",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm/6 lg:text-base/6 font-normal tracking-wide font-sans",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[var(--borderRadius)] z-40 mb-4",
        className,
        showGradient &&
          "bg-bg-[rgba(40,40,40,0.70)] dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const IconContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
