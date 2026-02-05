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
            rounded-2xl h-full w-full p-6 overflow-hidden
            bg-gradient-to-br from-primary to-primary/90
            border-2 border-primary/20
            group-hover:border-secondary/60
            group-hover:shadow-xl
            relative z-20
            transition-all duration-500
            `,
            className
        )}
        >
        <div className="relative z-50">
            <div className="p-2">{children}</div>
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
        font-bold tracking-wide mt-4 text-xl
        bg-gradient-to-r from-secondary via-accent to-tertiary
        bg-clip-text text-transparent
        group-hover:scale-105 transition-transform duration-300
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
        mt-6 tracking-wide leading-relaxed text-base
        text-white/90
        group-hover:text-white transition-colors duration-300
        `,
        className
      )}
    >
      {children}
    </p>
  )
}
