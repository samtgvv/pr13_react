import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import s from './ProductPage.module.css'
import { products } from '../../data/data'

export function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div className={`container ${s.main}`}>
            <Link className={s.exit} to={`/catalog`}>На главную</Link>
            <div className={s.product}>
                <div className={s.product__img}>
                    <img src={product.img} alt="product" />
                </div>
                <div className={s.product__about}>
                    <h3 className={s.product__name}>
                        {product.name}
                    </h3>
                    <p className={s.product__price}>
                        {product.price} ₽
                    </p>
                </div>
            </div>

        </div>
    )
}