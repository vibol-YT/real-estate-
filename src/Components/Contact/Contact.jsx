import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', '6511583c-e00f-4093-a91e-1b1f3cc48002');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('');
        toast.success('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error:', data);
        toast.error(data.message || 'Submission failed');
        setResult('');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Something went wrong. Please try again.');
      setResult('');
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center" data-aos="fade-down">
        Contact{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl text-gray-300 mx-auto pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left" data-aos="fade-right">
            <h2 className="text-gray-800">Your Name</h2>
            <input
              type="text"
              className="w-full border-2 hover:border-gray-300 border-gray-600 rounded py-3 px-4 mt-2"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4" data-aos="fade-left">
            <h2 className="text-gray-800">Your Email</h2>
            <input
              type="email"
              className="w-full border-2 border-gray-600 hover:border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left" data-aos="fade-up">
          <h2 className="text-gray-800">Message</h2>
          <textarea
            className="w-full border border-gray-600 hover:border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded disabled:opacity-60"
          disabled={!!result}
         data-aos="fade-up">
          {result ? result : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
