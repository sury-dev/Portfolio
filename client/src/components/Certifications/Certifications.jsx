import React from 'react'
import './Certifications.css'
import Certificate from './Certificate'

function Certifications() {
    return (
        <>
            <div className="contain" id='certifications'>
                <div className="color-box" id='cb2'></div>
                <div className="color-box" id='cb3'></div>
                <div className='certifications'>
                    <p className='headerBox glassMorph mb-6 dark:border-white border-black dark:text-white text-black'>
                        Certifications
                    </p>
                    <div className="certificates-container">
                        < Certificate image={"/Certificate1.png"} />
                        < Certificate image={"/Certificate2.png"}/>
                        < Certificate image={"/Certificate3.png"}/>
                        < Certificate image={"/Certificate4.png"}/>
                        < Certificate image={"/Certificate3.png"}/>
                        < Certificate image={"/Certificate2.png"}/>
                        < Certificate image={"/Certificate1.png"} />
                        < Certificate image={"/Certificate4.png"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certifications
