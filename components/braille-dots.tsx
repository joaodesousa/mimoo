interface BrailleDotsProps {
  pattern: string
  className?: string
}

// Simple mapping of characters to Braille dot patterns (simplified for visual effect)
const braillePatterns: Record<string, number[][]> = {
  m: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  i: [
    [0, 0],
    [1, 0],
    [0, 0],
  ],
  o: [
    [1, 0],
    [0, 1],
    [0, 1],
  ],
  j: [
    [0, 0],
    [1, 0],
    [0, 1],
  ],
  n: [
    [1, 1],
    [1, 0],
    [0, 1],
  ],
  u: [
    [1, 0],
    [0, 0],
    [1, 1],
  ],
  s: [
    [0, 1],
    [1, 0],
    [0, 1],
  ],
}

export default function BrailleDots({ pattern, className = "" }: BrailleDotsProps) {
  // Generate a grid of dots based on the pattern
  const generateDots = () => {
    const patternChars = pattern.toLowerCase().split("")
    const rows = 10
    const cols = Math.ceil(patternChars.length * 2)

    return (
      <div className={`grid grid-rows-${rows} grid-cols-${cols} gap-4 ${className}`}>
        {Array.from({ length: rows * cols }).map((_, index) => {
          const row = Math.floor(index / cols)
          const col = index % cols
          const charIndex = Math.floor(col / 2)
          const char = patternChars[charIndex] || ""
          const dotPattern = braillePatterns[char] || [
            [0, 0],
            [0, 0],
            [0, 0],
          ]

          // Determine if this position should have a dot
          const dotCol = col % 2
          const dotRow = row % 3
          const hasDot = char && dotPattern[dotRow] && dotPattern[dotRow][dotCol] === 1

          return (
            <div
              key={index}
              className={`rounded-full ${hasDot ? "bg-orange-500" : "bg-stone-200"} opacity-${hasDot ? "30" : "10"}`}
              style={{ width: "8px", height: "8px" }}
            />
          )
        })}
      </div>
    )
  }

  return <div className={className}>{generateDots()}</div>
}

