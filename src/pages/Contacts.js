import React from 'react'


function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kyiv / Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <p><a href="tel:+79051234567">+380 97 97 886 12</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">14.12.1998yn@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Contacts