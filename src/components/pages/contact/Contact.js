import { useState } from "react";
import Navbar from "../../Navbar";
import DiscountBanner from "../../DiscountBanner";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import styled from "styled-components";
import questions from "../../../helpers/questions";

function Contact() {
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const [questionIndex, setQuestionIndex] = useState(null);

 console.log(questionIndex);

 return (
  <Wrapper>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <div className='map'>
    <iframe
     frameBorder='0'
     scrolling='no'
     marginHeight='0'
     marginWidth='0'
     height='500px'
     width='100%'
     src='https://maps.google.com/maps?q=gamla%20brogatan%2C%20stockholm&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near'
     title='gamla brogatan, stockholm'
     aria-label='gamla brogatan, stockholm'
    ></iframe>
   </div>
   <div className='contact section-pd'>
    <div className='container'>
     <div className='row'>
      <div className='col-md-6 col-12 mb-5'>
       <div className='FAQ pr'>
        <div className='FAQ__title'>
         <h5 className='sub-heading mb-3'>Common queries answered</h5>
         <h2 className='heading mb-5'>Frequently asked Questions</h2>
        </div>
        <div className='questtions'>
         {questions.map((question, index) => {
          return (
           <div
            className='question'
            key={question.id}
            onClick={() => {
             if (questionIndex === index) {
              return setQuestionIndex(null);
             }
             setQuestionIndex(index);
            }}
           >
            <div
             className={`${
              questionIndex === index
               ? "question__upper clicked"
               : "question__upper"
             }`}
            >
             <h4>{question.question}</h4>
            </div>
            <div
             className={`${
              questionIndex === index
               ? "question__lower opened"
               : "question__lower"
             }`}
            >
             <p>{question.answer}</p>
            </div>
           </div>
          );
         })}
        </div>
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5 border-left'>
       <div className='contact__form pl'>
        <h5 className='sub-heading mb-3'>Still need help?</h5>
        <h2 className='heading mb-5'>Get in touch with us</h2>
        <form>
         <div className='form__name'>
          <h5>
           Name <span className='star'>*</span>
          </h5>
          <div className='row'>
           <div className='col-md-6 col-12'>
            <input type='text' />
            <h6>First</h6>
           </div>
           <div className='col-md-6 col-12'>
            <div className='input-control'>
             <input type='text' />
             <h6>Last</h6>
            </div>
           </div>
          </div>
         </div>
         <div className='form__email'>
          <h5>
           Email <span className='star'>*</span>
          </h5>
          <div className='row'>
           <div className='col-12'>
            <input type='text' />
           </div>
          </div>
         </div>
         <div className='form__message'>
          <h5>
           Comment or Message <span className='star'>*</span>
          </h5>
          <div className='row'>
           <div className='col-12'>
            <textarea></textarea>
           </div>
          </div>
         </div>
         <button className='form__btn btn'>Submit</button>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </Wrapper>
 );
}

export default Contact;

const Wrapper = styled.div`
 .FAQ__title .sub-heading,
 .contact__form .sub-heading {
  color: var(--grayColor);
 }

 .FAQ__title .heading,
 .contact__form .heading {
  color: var(--darkColor);
  font-weight: 600;
 }

 .questtions {
  color: #7c7c7c;
 }

 .question {
  border: 1px solid #eee;
  overflow: hidden;

  .question__upper {
   padding: 0.5rem;
   cursor: pointer;
  }

  .question__upper.clicked {
   color: var(--darkColor);
  }

  .question__lower {
   height: 0;
   padding: 0 0.5rem;
   transition: var(--transition);
  }

  .question__upper,
  .question__lower {
   transition: var(--transition);
  }

  .question__lower.opened {
   height: auto !important;
   padding: 0.5rem;
  }

  h4 {
   font-size: 19px;
  }

  p {
   margin: 0;
   font-size: 15px;
  }
 }

 .border-left {
  border-left: 1px solid #eee;
 }

 .pl {
  padding-left: 2rem;
 }

 .pr {
  padding-right: 2rem;
 }

 .contact__form {
  input,
  textarea {
   width: 100%;
   border: 1px solid #ccc;
   padding: 0.25rem;
  }

  .form__name,
  .form__email,
  .form__message {
   margin-bottom: 1.25rem;
  }

  .form__name h5,
  .form__email h5,
  .form__message h5 {
   color: #444;
   margin-bottom: 0.25rem;
   font-size: 16px;

   span {
    color: #f00;
    font-size: 16px;
   }
  }

  .form__name h6,
  .form__email h6,
  .form__message h6 {
   margin-top: 0.25rem;
   font-size: 13px;
  }

  .form__message textarea {
   height: 120px;
  }

  .form__btn {
   background-color: var(--greenColor);
   color: #fff;
   padding: 0.5rem 1.5rem;
   font-weight: 600;
   font-size: 15px;
   transition: var(--ransition);
  }

  .form__btn:hover {
   background-color: #009245;
  }
 }

 @media (max-width: 767px) {
  .pl,
  .pr {
   padding: 0 !important;
  }

  .border-left {
   border-left: 0;
  }

  .question__upper h4 {
   font-size: 16px;
  }

  .question__lower p {
   font-size: 14px;
  }
 }
`;
