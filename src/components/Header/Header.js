import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';

import {heroesFetched} from '../../actions'

import './header.css';

const Header = () => {
 
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm(); 


    const onSubmit = (data) => {
        dispatch(heroesFetched(data))
    }

    return (
        <>
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">STX Next</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link"
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link" 
                                    to="/myFilms">
                                    My films
                                </NavLink>
                            </li>
                        </ul>
                        <form 
                            className="d-flex"
                            onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Enter film title" 
                                aria-label="Search"
                                {...register('searchTitle', { required: true})}
                                />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;