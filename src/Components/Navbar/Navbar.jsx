import React, {useState} from 'react'
import { images } from '../../constants'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const[showLinks, setShowLinks] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setShowLinks(true)} />

        { showLinks && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX  onClick={() => setShowLinks(false)} />

            <ul className='app__navbar-links'>
              {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <div />
                  <a 
                    href={`#${item}`}
                    onClick={() => setShowLinks(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
