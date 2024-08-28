import React from 'react'
import Link from 'next/link'
import {navItems} from '../../datas/navItems'

const MainNav = () => {

  return (
    <nav>
      <ul>
      {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav