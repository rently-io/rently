import Styling from './styles/button.module.css'
import Link from 'next/link'

export default function ButtonLink({text, icon, route, width } : { text : string, icon? : string, route? : string, width?: string }) {
  return (
    <Link href={route ?? '/'}>
      <button type="button" className={`${Styling.btn} ${Styling.link}`} style={{ width: width ?? 'auto' }}>
        <i className={`${icon} ${Styling.icon}`} style={{ display: !icon ? 'none' : '' }} />
        {text}
      </button>
    </Link>
  )
}
