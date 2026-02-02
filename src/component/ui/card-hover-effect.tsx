import { cn } from "../../lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={item.link}
          href={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverBackground"
                className="
                  absolute inset-0 h-full w-full block rounded-3xl
                  bg-gradient-to-r from-[#ffde59]/45 to-[#ff914d]/45
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  )
}

/* ---------------- CARD ---------------- */

export const Card = ({
    className,
    children,
    }: {
    className?: string
    children: React.ReactNode
    }) => {
    return (
        <div
        className={cn(
            `
            rounded-2xl h-full w-full p-4 overflow-hidden
            bg-[#0b1d33]/95
            border border-transparent
            group-hover:border-[#ff914d]/90
            relative z-20
            `,
            className
        )}
        >
        <div className="relative z-50">
            <div className="p-4">{children}</div>
        </div>
        </div>
    )
    }

/* ---------------- TITLE ---------------- */

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        `
        font-bold tracking-wide mt-4
        bg-gradient-to-r from-[#ffde59] to-[#ff914d]
        bg-clip-text text-transparent
        `,
        className
      )}
    >
      {children}
    </h4>
  )
}

/* ---------------- DESCRIPTION ---------------- */

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        `
        mt-8 tracking-wide leading-relaxed text-sm
        text-neutral-300
        `,
        className
      )}
    >
      {children}
    </p>
  )
}
