import s from './Banner.module.css';
export function Banner() {
    return(
        <section className={s.banner}>
            <div className="container">
                <a href="#" className={s.about}>О компании <span>АвтоТорг</span></a>
            </div>
        </section>
    )
}