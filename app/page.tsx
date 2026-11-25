import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { Portfolio } from '@/components/portfolio'

export default function Page() {
  const cvAvailable = existsSync(join(process.cwd(), 'public', 'cv.pdf'))
  return <Portfolio cvAvailable={cvAvailable} />
}
