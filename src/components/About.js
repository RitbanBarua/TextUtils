import React from 'react'

export default function About() {
    return (
        <>
            <section className="about-section text-center" id="about">
                <h1 className='my-3'><u>About</u></h1>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">

                        <div className="col-lg-8">
                            <h2 className="mb-4">Built with Bootstrap 5.3</h2>
                            <p>
                                TextUtils is an open-source text utility app which offer various day-to-day use features such as word & character counting, covert text to UpperCase & LowerCase, clear extra spaces and much more. It can be yours right now, simply visit us on
                                &nbsp;<a href="https://github.com/RitbanBarua/TextUtils/" target='_blank' rel="noreferrer">GitHub</a>&nbsp; and download the source codes for FREE! 
                                This project is open source, and you can use it for any purpose, personal or commercial.
                            </p>
                        </div>
                    </div>
                    <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/ipad.png" alt="..." />
                </div>
            </section>
        </>
    )
}
