import press from "../images/press.webp";

function InThePress() {
 return (
  <div className='press section-pd'>
   <div className='section-title'>
    <h2>In the press</h2>
   </div>
   <div className='container'>
    <div className='row'>
     <div className='col-12'>
      <img src={press} alt='' className='img-fluid' />
     </div>
    </div>
   </div>
  </div>
 );
}

export default InThePress;
