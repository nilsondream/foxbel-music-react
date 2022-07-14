import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaSearch } from 'react-icons/fa'
import { MdClose, MdMenu } from 'react-icons/md'
import Sidebar from '../Sidebar/Sidebar'

const Search = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleValue = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/?q=${decodeURI(value)}`);
        setValue('');
    }

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='search-container'>
                <div className='menu-mobile-container'>
                    <MdMenu onClick={showSidebar} />
                </div>
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        placeholder='Buscar'
                        name='value'
                        value={value}
                        onChange={handleValue}
                        required
                    />
                    <FaSearch />
                </form>
                <div className='user'>
                    <FaUser />
                    <p>Nilson Roa</p>
                </div>
            </div>

            <div className={sidebar ? 'sidebar-mobile sidebar-mobile-active' : 'sidebar-mobile'}>
                <div className='btn-mobile-close' onClick={showSidebar}><MdClose /></div>
                <div onClick={showSidebar}><Sidebar /></div>
            </div>
        </>
    )
}

export default Search