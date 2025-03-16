import React from 'react';

function Testimonials() {
  const trustmaryWidgetCode = `
    <div class="trustmary-widget" data-trustmary-widget="g0frZ_zB7"></div>
    <script src="https://widget.trustmary.com/g0frZ_zB"></script>
    
  `;
  return (
    <section className="w-full py-16 bg-[#ede2db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#711f50] mb-4 font-display">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#711f50]/80 max-w-2xl mx-auto">
            Read authentic reviews from our valued customers
          </p>
        </div> */}
        <div className=" backdrop-blur-sm rounded-2xl  p-8 max-w-6xl mx-auto ">
          <div dangerouslySetInnerHTML={{ __html: trustmaryWidgetCode }} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
{/* <script src="https://widget.trustmary.com/KWmPmkK1_"></script> */}