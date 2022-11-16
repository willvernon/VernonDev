import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import React, { useState } from 'react';
import cn from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageContainer from '../components/PageContainer'

export default function ContactForm() {
  const notify = () => toast('✅ Thank You!');

  const [query, setQuery] = useState({
    name: '',
    email: ''
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch('https://getform.io/f/b5438b17-e329-406d-ac93-956f5c63ddd5', {
      method: 'POST',
      body: formData
    }).then(() => setQuery({ name: '', email: '', message: '' }));
  };
  return (
    <PageContainer>
      <div className="items-center flex mb-12 left-0 justify-center  top-0 w-[100%] ">
        <div
          className={cn(
            'transform hover:scale-[1.01] transition-all',
            'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
            'from-[#946ee7] via-[#3B82F6] to-[#33aaea]'
          )}
        >
          <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-lg font-medium mb-6 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                Contact Me
              </h4>
            </div>
            <form onSubmit={formSubmit}>
              <div className="p-2 text-black dark:text-white">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="form-control rounded-lg p-1"
                  value={query.name}
                  onChange={handleParam()}
                />
              </div>
              <div className="p-2 text-black dark:text-white">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="form-control rounded-lg p-1"
                  value={query.email}
                  onChange={handleParam()}
                />
              </div>
              <div className="p-2 text-black dark:text-white ">
                <label>Message</label>
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Message"
                  className="form-control rounded-lg p-1 "
                  value={query.message}
                  onChange={handleParam()}
                />
              </div>
              <div className="p-2">
                <button
                  type="submit"
                  onClick={notify}
                  className={cn(
                    'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 font-black tracking-wider',
                    'from-[#946ee7] via-[#3B82F6] to-[#33aaea]'
                  )}
                >
                  Send
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
