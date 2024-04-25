import React from 'react';
import { useEffect, useRef, useState } from 'react';
import whatsAppIcon from '../images/whatsapp_icon.png'
import emailIcon from '../images/email_icon.png'
import calendarIcon from '../images/calendar_icon.png'
import msgIcon from '../images/contact_msg_icon.png'
import emailjs from '@emailjs/browser';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ContactSection() {
    
    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_bcv048g', 'template_t1gvz5c', form.current, 'S_J1xKjB4iDrY1EA4')
          .then((result) => {
              console.log(result.text);
              alert('Your message was sent!');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    

      const BrazilTime = () => {
        return new Date().toLocaleString("en-BR", { timeZone: 'America/Sao_Paulo', timeStyle: 'short', hourCycle: 'h12' })
      } 

      const BrazilDate = () => {
        return new Date().toLocaleString("en-BR", {day: "numeric"})
      }

    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = day.getMonth();
   


    const [time, setTime] = useState(BrazilTime());
    const [date, setDate] = useState(BrazilDate());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(BrazilTime());
          setDate(BrazilDate());
        }, 60000);
        return () => clearInterval(interval);
      }, []);

     

   
    return (
        <div className='contact_wrapper'>
            <div className='contact_info' data-aos="fade-up">
                <h1>Get in Touch <img src={msgIcon} className='title_icon' alt="" /></h1>
                <h3>Let's do something great together!</h3>
                <ul className='contact_info_list'>
                    <li><img src={whatsAppIcon} alt="WhatsApp" />+55 11 96580-1375</li>
                    <li><img src={emailIcon} alt="Email" />contato@jaquelinelima.com.br</li>
                    <li><img src={calendarIcon} alt="Email" />9:00 AM - 5:00 PM (Sāo Paulo)</li>
                </ul>

                <div className="brazil_time_wrapper">
                    <p className='brazil_time'>🇧🇷 {weekDay[day.getDay()]}, {monthNames[month]} {date}</p>
                    <p className='brazil_time'>🕑 {time}</p>
                </div>
            </div>

            <div className='contact_form_wrapper'>
                <form ref={form} onSubmit={sendEmail} className='contact_form' data-aos="fade-up">
                    <input type="text" label="name" placeholder='Name' name='user_name' />
                    <input type="email" label="email" placeholder='Email' name='user_email'/>
                    <textarea label="message" placeholder='Message' name="message"></textarea>
                    <input type="submit" value="Send »"/>
                </form>
            </div>
        </div>
    )
}