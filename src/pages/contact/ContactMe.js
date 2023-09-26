import React, { useEffect, useRef, useState } from "react";
import { BrandLoader, Button } from "../../components/index";
import { at, call, contact, location } from "../../assets/index";
import { BsSend } from "react-icons/bs";
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import emailjs from '@emailjs/browser'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import './contactMe.scss'
import { HOME_ROUTE } from "../../contents-management/Landing";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState(true)
  const [errorMsg, setErrorMsg] = useState()

  const navigator = useNavigate()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const form = useRef();

  const toHomePage = () => {
    navigator(`/${HOME_ROUTE}`)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7xq1r2o', 'template_otksvsu', form.current, 'vKj9B_yFaKG7akgyi')
      .then((result) => {
          console.log(result.text);
          successMsg()
          toHomePage()
          form.current.reset()
      }, (error) => {
          console.log(error.text);
          unSuccessfulMsg()
      });
  };

  const displayErrorMsg = () => {
    if(!/^\S+@\S+\.\S+$/.test(form.current.user_email.value)) {
      setValidation(false)
      setErrorMsg('Please enter a valid email')
    } else {
      setValidation(true)
      setErrorMsg('')
    }
  }

  const successMsg = () => {
    setTimeout(() => {
      toast('Message sent successfully', {
        position: "top-center",
        duration: 5000,
        style: {
          background: '#ffffff',
          color: '#093756'
        }
      });
    }, 5000);
  }

  const unSuccessfulMsg = () => {
    setTimeout(() => {
      toast('Sorry Your Message was not sent', {
        position: "top-center",
        auth: '5000',
        style: {
          background: '#fffff',
          color: '#093756'
        }
      })
    }, 5000)
  }

  return (
    <>
      {loading ? (
        <BrandLoader />
      ) : (
       <>
       <h1 className="header">Contact Me</h1>
         <div className="contact-page">
          <div className="form-holder">
            <form onSubmit={sendEmail} ref={form}>
              <div className="title-des">
                <h3>Let's Connect!</h3>
                <p>
                  Have an amazing idea you wish to bring to life? I’m sure you
                  do! so let’s connect and discuss about it together.
                </p>
              </div>
              <div className="inputFild-container">
                <div>
                  <label>Name</label><br/>
                  <input type="text" placeholder="Enter your name" name="user_name" />
                </div>
                <div>
                  <label>Email</label><br/>
                  <input type="email" placeholder="Enter your email" name="user_email" onBlur={displayErrorMsg} />
                  {!validation && <p className="error">{errorMsg}</p>}
                </div>
                <div>
                  <label>Message</label><br/>
                  <textarea type="textarea" name="message" placeholder="Send a message" />
                </div>
                <div>
                  <Button btnTxt="Send" type="submit" icon={<BsSend />} className="send-btn" />
                </div>
              </div>
            </form>
            <div className="imfo">
              <p>
                <span>
                  <img src={at} alt="icon" />
                </span>
                <span>samson.ocran@gmail.com</span>
              </p>
              <p>
                <span>
                  <img src={call} alt="icon" />
                </span>
                <span>+2349049043494</span>
              </p>
              <p>
                <span>
                  <img src={location} alt="icon" />
                </span>
                <span>Lagos, Nigeria</span>
              </p>
            </div>
          </div>
          <div className="contact-icons">
            <img src={contact} alt="icon" />
          </div>
        </div>
        <div className="footer">
          <Link to="https://github.com/jahseed89" target="_blank">
            <AiFillGithub />
          </Link>
          <Link to="https://medium.com/@samson.ocran" target="_blank">
            <SiGmail />
          </Link>
          <Link to="https://www.linkedin.com/in/samson-ocran/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://twitter.com/samson_ocran" target="_blank">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/jahseedsam/" target="_blank">
            <FaInstagram />
          </Link>
        </div>
       </>
      )}
    </>
  );
};

export default ContactMe;
