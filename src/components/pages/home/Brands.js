import styled from "styled-components";
import brand1 from "../../../images/brand_01.webp";
import brand2 from "../../../images/brand_02.webp";
import brand3 from "../../../images/brand_03.webp";
import brand4 from "../../../images/brand_04.webp";
import brand5 from "../../../images/brand_05.webp";
import brand6 from "../../../images/brand_06.webp";

function Brands() {
 return (
  <Wrapper>
   <div className='section-border section-pd'>
    <div className='section-title'>
     <h2>Brands we stock</h2>
     <p>
      We pick the very best so you can be assured of the quality. There can be
      no compromises when it comes to materials, ease of wear, and durability.
     </p>
    </div>
    <div className='container'>
     <div className='row'>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand6} alt='' className='img-fluid' />
      </div>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand5} alt='' className='img-fluid' />
      </div>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand4} alt='' className='img-fluid' />
      </div>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand3} alt='' className='img-fluid' />
      </div>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand2} alt='' className='img-fluid' />
      </div>
      <div className='col-4 col-md-2 text-center mb-3'>
       <img src={brand1} alt='' className='img-fluid' />
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default Brands;

const Wrapper = styled.div``;
