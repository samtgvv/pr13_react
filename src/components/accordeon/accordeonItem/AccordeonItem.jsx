import { useState } from "react";
import s from '../Accordeon.module.css'

export function AccordeonItem({ title, content }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={s.item}>
            <div onClick={()=>setIsActive(!isActive)} className={s.title}>
                <p>{title}</p>
                <div className={s.arrow}>
                    {
                        isActive ? 'x' : '+'
                    }
                </div>
            </div>
            {
                isActive &&
                <div className={s.text}>{content}</div>
            }
        </div>
    )

}