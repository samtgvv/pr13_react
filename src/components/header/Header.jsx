import s from './Header.module.css';
import { Link, NavLink } from 'react-router-dom'
export function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <div className={s.nav}>
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/users">Пользователи</NavLink>
                    </div>
                    <NavLink to="/"><img src="/avtotorgLogo.png" alt="logo" className={s.logo} /></NavLink>
                    <div className={s.btns}>
                        <button className={s.regBtn}>Регистрация</button>
                        <button className='btn'>Вход</button>
                    </div>
                </div>
            </div>
        </header>
    )
}