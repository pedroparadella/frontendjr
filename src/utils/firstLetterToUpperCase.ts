export default function firstLetterToUpperCase(word: string): string {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}