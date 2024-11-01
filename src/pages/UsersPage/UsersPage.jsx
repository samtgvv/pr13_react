import s from './UsersPage.module.css'
import { useEffect } from 'react'
import { useState } from 'react'

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        });
        e.target.reset();
        setMessage('Форма отправлена')
    }

    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit} className={s.form}>
                    <input type="text" name='name' placeholder='Введите имя'/>
                    <button className='btn' type="submit">Отправить</button>
                    <div className={s.message}>{message}</div>
                </form>
                <div className={s.users}>
                    {
                        users.map(user => {
                            return (
                                <div className={s.user}>{user.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )

}   