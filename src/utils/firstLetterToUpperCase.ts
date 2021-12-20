export default function firstLetterToUpperCase(word: string): string | undefined {
  word = word?.charAt(0).toUpperCase() + word?.slice(1);
  return word;
}