interface BrailleTextProps {
  text: string
  className?: string
}

// Simple mapping of characters to Braille patterns (simplified for visual effect)
const brailleMap: Record<string, string> = {
  // Basic Latin alphabet
  a: "⠁",
  b: "⠃",
  c: "⠉",
  d: "⠙",
  e: "⠑",
  f: "⠋",
  g: "⠛",
  h: "⠓",
  i: "⠊",
  j: "⠚",
  k: "⠅",
  l: "⠇",
  m: "⠍",
  n: "⠝",
  o: "⠕",
  p: "⠏",
  q: "⠟",
  r: "⠗",
  s: "⠎",
  t: "⠞",
  u: "⠥",
  v: "⠧",
  w: "⠺",
  x: "⠭",
  y: "⠽",
  z: "⠵",
  
  // Portuguese accented characters
  á: "⠷", // a with acute accent
  à: "⠮", // a with grave accent
  â: "⠡", // a with circumflex
  ã: "⠫", // a with tilde
  ä: "⠜", // a with diaeresis (not common in Portuguese but included)
  
  é: "⠿", // e with acute accent
  è: "⠣", // e with grave accent
  ê: "⠩", // e with circumflex
  ë: "⠫", // e with diaeresis (not common in Portuguese but included)
  
  í: "⠌", // i with acute accent
  ì: "⠬", // i with grave accent
  î: "⠻", // i with circumflex
  ï: "⠻", // i with diaeresis (not common in Portuguese but included)
  
  ó: "⠾", // o with acute accent
  ò: "⠪", // o with grave accent
  ô: "⠹", // o with circumflex
  õ: "⠢", // o with tilde
  ö: "⠪", // o with diaeresis (not common in Portuguese but included)
  
  ú: "⠳", // u with acute accent
  ù: "⠥⠈", // u with grave accent
  û: "⠱", // u with circumflex
  ü: "⠳", // u with diaeresis (not common in Portuguese but included)
  
  ç: "⠯", // c with cedilla
  
  // Upper case versions (in braille, uppercase is indicated by preceding with the uppercase indicator ⠠)
  A: "⠠⠁",
  B: "⠠⠃",
  C: "⠠⠉",
  D: "⠠⠙",
  E: "⠠⠑",
  F: "⠠⠋",
  G: "⠠⠛",
  H: "⠠⠓",
  I: "⠠⠊",
  J: "⠠⠚",
  K: "⠠⠅",
  L: "⠠⠇",
  M: "⠠⠍",
  N: "⠠⠝",
  O: "⠠⠕",
  P: "⠠⠏",
  Q: "⠠⠟",
  R: "⠠⠗",
  S: "⠠⠎",
  T: "⠠⠞",
  U: "⠠⠥",
  V: "⠠⠧",
  W: "⠠⠺",
  X: "⠠⠭",
  Y: "⠠⠽",
  Z: "⠠⠵",
  
  // Uppercase accented characters
  Á: "⠠⠷",
  À: "⠠⠮",
  Â: "⠠⠡",
  Ã: "⠠⠫",
  Ä: "⠠⠜",
  
  É: "⠠⠿",
  È: "⠠⠣",
  Ê: "⠠⠩",
  Ë: "⠠⠫",
  
  Í: "⠠⠌",
  Ì: "⠠⠬",
  Î: "⠠⠻",
  Ï: "⠠⠻",
  
  Ó: "⠠⠾",
  Ò: "⠠⠪",
  Ô: "⠠⠹",
  Õ: "⠠⠢",
  Ö: "⠠⠪",
  
  Ú: "⠠⠳",
  Ù: "⠠⠥⠈",
  Û: "⠠⠱",
  Ü: "⠠⠳",
  
  Ç: "⠠⠯",
  
  // Punctuation and space
  " ": "⠀", // space
  ".": "⠲", // period
  ",": "⠂", // comma
  ";": "⠆", // semicolon
  ":": "⠒", // colon
  "?": "⠦", // question mark
  "!": "⠖", // exclamation mark
  "'": "⠄", // apostrophe
  "(": "⠐⠣", // opening parenthesis
  ")": "⠐⠜", // closing parenthesis
  "-": "⠤", // hyphen
  "/": "⠌", // slash
  
  // Numbers (in braille, preceded by the number sign ⠼)
  "0": "⠼⠚",
  "1": "⠼⠁",
  "2": "⠼⠃",
  "3": "⠼⠉",
  "4": "⠼⠙",
  "5": "⠼⠑",
  "6": "⠼⠋",
  "7": "⠼⠛",
  "8": "⠼⠓",
  "9": "⠼⠊"
}

export default function BrailleText({ text, className = "" }: BrailleTextProps) {
  // Convert text to Braille
  const brailleText = text
    .toLowerCase()
    .split("")
    .map((char) => {
      return brailleMap[char] || char
    })
    .join("")

  return (
    <div className={className}>
      <span aria-hidden="true" className="font-mono tracking-wider">
        {brailleText}
      </span>
      <span className="sr-only">{text}</span>
    </div>
  )
}

