import styled from "styled-components";
import summary1 from "../../../images/about_01.webp";
import summary2 from "../../../images/about_02.webp";
import summary3 from "../../../images/about_03.webp";

function AboutSummary() {
 return (
  <Wrapper>
   <div className='summary section-pd'>
    <div className='container'>
     <div className='row align-items-center'>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item right'>
        <h5>After looking at alternatives</h5>
        <h2>Our journey began in 2018</h2>
        <p>
         Synth kickstarter coloring book cold-pressed fanny pack man bun beard.
         Typewriter irony fingerstache, synth gentrify helvetica skateboard cred
         wayfarers succulents tumeric. Edison bulb semiotics cornhole raclette.
         Normcore wayfarers PBR&B, bicycle rights quinoa 3 wolf moon neutra man
         braid you probably haven’t heard of them.
        </p>
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item left'>
        <img src={summary1} alt='' className='img-fluid' />
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item right'>
        <img src={summary2} alt='' className='img-fluid' />
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item left'>
        <h5>A perfect fit for your every day life</h5>
        <h2>Designed to be versatile</h2>
        <p>
         Austin cloud bread pug, coloring book palo santo XOXO activated
         charcoal tbh. Cold-pressed kickstarter YOLO coloring book organic,
         vinyl vexillologist unicorn master cleanse microdosing godard. Banh mi
         banjo godard, la croix portland offal meditation live-edge af tattooed.
        </p>
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item right'>
        <h5>Simplicity in design and form</h5>
        <h2>We’re just getting started</h2>
        <p>
         Letterpress fam meh edison bulb, glossier gastropub gluten-free disrupt
         tousled taxidermy food truck knausgaard live-edge. Tumblr celiac
         flannel mumblecore gluten-free everyday carry. Fixie kitsch wayfarers
         dream roof party craft beer salvia knausgaard franzen. Beard XOXO
         listicle, vaporware trust fund shaman cred.
        </p>
       </div>
      </div>
      <div className='col-md-6 col-12 mb-5'>
       <div className='summary__item left'>
        <img src={summary3} alt='' className='img-fluid' />
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default AboutSummary;

const Wrapper = styled.div`
 .summary__item.right {
  text-align: right;
  padding-right: 1rem;
 }

 .summary__item.left {
  padding-left: 1rem;
 }

 .summary__item {
  width: 100%;
  padding-top: 1.25rem;

  h5 {
   color: #8e8e8e;
   margin-bottom: 1rem;
  }

  h2 {
   color: var(--darkColor);
   font-weight: 600;
   margin-bottom: 1.5rem;
  }

  img {
   width: 100%;
  }
 }

 @media (max-width: 767px) {
  .summary__item {
   padding: 0 !important;
  }
 }
`;
