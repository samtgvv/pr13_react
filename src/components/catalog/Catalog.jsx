import { Card } from '../card/Card';
import s from './Catalog.module.css';
import { products } from '../../data/data'
import { Search } from '../search/Search'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    function sort(e) {
        setSorting(e.target.value)
    }
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'price_asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'count_ost':
                return [...products].sort((a, b) => (b.count === a.count ? 0 : b.count ? 1 : -1));
            default:
                return products;

        }
    }
    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);

    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <Search handleChange={handleChange} />
            <div className={s.sort__category}>
                <div className={s.cat}>
                    <p>Категории:</p>
                    <div className={s.btns}>
                        <buttton className='btn'>Все товары</buttton>
                        <buttton className='btn'>Шины/колеса</buttton>
                        <buttton className='btn'>Масла</buttton>
                        <buttton className='btn'>Ароматизаторы</buttton>
                    </div>
                </div>
                <div className={s.sort}>
                    <p>Сортировка:</p>
                    <select onChange={sort}>
                        <option value="price_asc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="count_ost">По наличию</option>
                    </select>
                </div>
            </div>

            <div className={s.cards}>
                {
                    sortedFilteredProducts.length ?
                        sortedFilteredProducts.map((product) => {
                            return (
                                <Card id={product.id} img={product.img} name={product.name} price={product.price} count={product.count} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
            <a href="#" className={s.also}>Загрузить еще товары</a>
        </section>
    )
}