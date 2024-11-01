import { Link } from 'react-router-dom';
import s from './Card.module.css';
import { useState } from 'react';
import { OrderModal } from '../orderModal/OrderModal';
export function Card({ id, img = 'https://tmka72.ru/TMKA/media/photos/2022/11/14/8e56c287600191f403c273378136218b.jpg', name = 'Неизвестно', price = 'Неизвестно',  count}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }

    return (
        <>
            <div className={s.card}>
                <img src={img} alt="tovar" />
                <h3>{name}</h3>
                <p>Остаток: {count}</p>
                <div className={s.card__inner}>
                    <p className={s.price}>{price} ₽</p>
                    {
                        count > 0 ?
                            <Link className='btn' to={`${id}`}>Подробнее</Link>
                            :
                            <button onClick={showModal} className='btn'>Заказать</button>
                    }
                </div>
            </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
    )
}