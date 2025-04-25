import React from 'react'
import './Certificate.css'
import { NavLink } from 'react-router-dom'

function Certificate({ image = "https://imgs.search.brave.com/i9_-MAdUBkRomF8VNkALES25SRDbL8k1wIKuRjdzn_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGYkxu/MlJvZlkvMS8wLzgw/MHcvY2FudmEtd3N0/Y3VzdG9tLWNlcnRp/ZmljYXRlLWFydHdv/cmstMS1KWkxUd0Y2/QnA1Yy5qcGc" }) {
    return (
        <a
            href="https://coursera.org/verify/HSK6O22HOWOE"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-box glassMorph border-2 dark:border-white border-black dark:text-white text-black"
        >
            <div className="certificate-image-container">
                <img src={image} alt="Certificate" />
            </div>
        </a>

    )
}

export default Certificate
