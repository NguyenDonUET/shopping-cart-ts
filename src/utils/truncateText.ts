export default function truncateText(text: string): string {
  return text.length > 22 ? `${text.substring(0, 22)}...` : text;
}
