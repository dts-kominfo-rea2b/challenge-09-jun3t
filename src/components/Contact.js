// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css'
import React from 'react';

const Contact = (props) => {
    const item = props.data;
    return (
        <>
            <div className="container-content-dua">
                <div className="about-label">
                    <center>
                       <img src={item.photo} className="img" alt={item.photo} />
                    </center>
                </div>
                <div className="about-isi">
                    <p key={item.name}>{item.name}</p>
                    <p key={item.phone}>{item.phone}</p>
                    <p key={item.email}>{item.email}</p>
                </div>
            </div>
        </>
    )
}

export default Contact;