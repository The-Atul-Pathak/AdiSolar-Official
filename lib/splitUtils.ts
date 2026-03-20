export function splitToChars(text: string): string[] {
  return text.split('');
}

export function splitToWords(text: string): string[] {
  return text.split(/(\s+)/).filter(Boolean);
}
