import s from './Accordeon.module.css'
import { AccordeonItem } from './accordeonItem/AccordeonItem'

export function Accordeon() {
    return (
        <div className={s.accordeon}>
            <AccordeonItem title='title 1' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='title 2' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='title 3' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='title 4' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
        </div>
    )

}