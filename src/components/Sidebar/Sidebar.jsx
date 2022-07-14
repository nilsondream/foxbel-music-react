import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/foxbel-logo.svg'

const Sidebar = () => {
    const [itemActive, setItemActive] = useState(1);

    return (
        <div className='sidebar-container'>
            <NavLink to={'/'} className='logo'>
                <img src={logo} alt='logo' />
                <h1>Foxbel Music</h1>
            </NavLink>

            <div className='list-links'>
                <h1>Mi Librería</h1>
                <Link
                    to={'/'}
                    className={`link-item ${itemActive === 1 ? 'active' : ''}`}
                    onClick={() => setItemActive(1)}>
                    Recientes
                </Link>
                <Link
                    to={'/?q=lil'}
                    className={`link-item ${itemActive === 2 ? 'active' : ''}`}
                    onClick={() => setItemActive(2)}>
                    Artistas
                </Link>
                <Link
                    to={'/?q=myke'}
                    className={`link-item ${itemActive === 3 ? 'active' : ''}`}
                    onClick={() => setItemActive(3)}>
                    Álbums
                </Link>
                <Link to={'/?q=ft'}
                    className={`link-item ${itemActive === 4 ? 'active' : ''}`}
                    onClick={() => setItemActive(4)}>
                    Canciones
                </Link>
                <Link
                    to={'/?q=radio%20edit'}
                    className={`link-item ${itemActive === 5 ? 'active' : ''}`}
                    onClick={() => setItemActive(5)}>
                    Estaciones
                </Link>
            </div>

            <div className='list-links'>
                <h1>Playlists</h1>
                <Link
                    to={'/?q=type%20beat'}
                    className={`link-item ${itemActive === 6 ? 'active' : ''}`}
                    onClick={() => setItemActive(6)}>
                    Drill Mode
                </Link>
                <Link
                    to={'/?q=lofi%20hiphop'}
                    className={`link-item ${itemActive === 7 ? 'active' : ''}`}
                    onClick={() => setItemActive(7)}>
                    Lo-Fi Coding
                </Link>
                <Link
                    to={'/?q=skrillex'}
                    className={`link-item ${itemActive === 8 ? 'active' : ''}`}
                    onClick={() => setItemActive(8)}>
                    Mayhem Dup
                </Link>
            </div>
        </div>
    )
}

export default Sidebar