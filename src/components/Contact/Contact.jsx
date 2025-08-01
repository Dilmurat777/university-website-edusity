import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '1464825e-58ce-47c7-aa25-b4ef2279fb47');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" name='contact'>
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, quis dolore velit
          molestiae, repudiandae quidem facere dignissimos repellendus sed perspiciatis minus vitae?
          Tempora dignissimos commodi tempore laudantium eum eligendi neque!
        </p>
        <ul>
          <li>
            {' '}
            <img src={mail_icon} alt="" />
            mrDilmurat777@gmail.com
          </li>
          <li>
            {' '}
            <img src={phone_icon} alt="" />1 123-456-7890
          </li>
          <li>
            {' '}
            <img src={location_icon} alt="" />
            77 Massachusetts Ave Boston, MA 02210 Cambridge <br />
            MA 02139 United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
