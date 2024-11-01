import s from './Search.module.css'
export function Search({handleChange}) {
    return(
        <input type="text" className={s.search} onChange={handleChange} placeholder='Поиск'/>
    )
}