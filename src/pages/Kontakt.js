import React, { useState } from 'react';
import { Link } from 'gatsby';
import "../styles/tailwind.css";
import Layout from '../components/Layout';


function Kontakt() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, email, message })
    }
    return (
        <Layout>
        <div className='container mx-auto px-4'>
            <h1 className="text-2xl font-bold text-center my-4">Kontakt Uns</h1>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full md:w-1/2 p-4 '>
                    <h2 className="text-xl font-semibold mb-4">Kontaktinformationen</h2>
                    <p><strong>Adresse:</strong> Hülshof 28, 44369 Dortmund</p>
                    <p><strong>Geschäftsführer:</strong> Christian Ullenboom</p>
                    <p><strong>E-Mail:</strong> info@retrobude.de</p>
                    <p><strong>Telefon:</strong> 0231/53 31 51 25</p>

                    <div className=" mt-4 h-80 " >
                        <iframe
                            title="Digitales Erlebnis-Center GmbH"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5168278785813!2d7.46527931572612!3d51.51740727963669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91b1f6b9752f9%3A0x42f2544f6c6b8b8d!2sH%C3%BClshof%2028%2C%2044369%20Dortmund%2C%20Germany!5e0!3m2!1sen!2sde!4v1707988121147!5m2!1sen!2sde"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-4">Schreiben Sie uns</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Senden
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Kontakt;