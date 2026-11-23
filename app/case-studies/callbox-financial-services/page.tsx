import type { Metadata } from 'next'
import { CallboxFinancialServicesCaseStudy } from '@/components/callbox-financial-services-case-study'

export const metadata: Metadata = {
  title: 'CALLBOXS — Financial Services Customer Operations Campaign | Pius Olasupo',
  description:
    'A problem-led B2B campaign positioning CALLBOXS as an operational support partner for financial-services customer operations.',
  openGraph: {
    title: 'CALLBOXS — Financial Services Customer Operations Campaign',
    description:
      'Your customers need answers. Your teams need room to solve.',
    type: 'article',
    images: [
      {
        url: '/images/projects/callboxs-financial-services-cover.png',
        width: 1024,
        height: 1280,
        alt: 'Editorial workflow illustration for financial-services customer operations.',
      },
    ],
  },
}

export default function CallboxFinancialServicesPage() {
  return <CallboxFinancialServicesCaseStudy />
}
