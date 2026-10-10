import { redirect } from 'next/navigation';
import { portfolio } from '@/lib/portfolio';

export default function HighlightsPage() {
  redirect(portfolio.interviewUrl);
}
