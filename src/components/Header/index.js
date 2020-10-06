import React, { useState, useEffect } from 'react'

import './hamburger.scss'
import './header.scss'
import Container from 'components/Container'
import { Link } from 'gatsby'

import logo from './eagleWingRanchLogo.png'

export default function Header({ location }) {

    const [expanded, setExpanded] = useState()

    useEffect(() => {
        setExpanded()
    }, [location])

    return (
        <header>
            <Container type={`header${ expanded ? ' header--expanded' : '' }`}>
                <NavLink to='/'>
                    <img className='logo' src={ logo } alt='Eagle Wing Ranch Logo' />
                </NavLink>
                <button className={`hamburgerMenu ${ expanded ? 'hamburgerMenu--active' : '' }`} onClick={() => setExpanded(expanded => !expanded)} aria-label='Navigation menu'>
                    <span className='hamburgerBox'>
                        <span className='hamburgerInner'></span>
                    </span>
                </button>
                <nav className={`menu ${ expanded ? 'menu--expanded' : '' }`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* eslint-disable-next-line */}
                        <li><NavLink to="/boarding/">Boarding</NavLink></li>
                        <li><NavLink to="/lessons/">Lessons</NavLink></li>
                        <li><NavLink to="/niagara-novice-series/">Niagara Novice Series</NavLink></li>
                        <li><NavLink to="/contact/">Contact</NavLink></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )

}

// export const NavLink = props => (
//     <RouterLink
//       {...props}
//       getProps={({ isCurrent }) => {
//         // the object returned here is passed to the
//         // anchor element's props
//         return {
//           className: isCurrent ? 'active' : ''
//         };
//       }}
//     />
//   );

const NavLink = ({ children, ...props }) => (
    <Link {...props} activeClassName='active'>{ children }</Link>
)