import React from 'react';

const Contacts = () => {
  return (
    <div className="container py-3 text-light" id="contacts">
      <h3 className="text-center mb-4" data-aos="fade-up">Contact Me</h3>
        <center>
        <div className="row justify-content-center">
        <div className="col-md-6 mb-4 cont rounded mx-2">
          <div className=" text-light p-4">
            <h5><i class="bi bi-whatsapp"></i> WhatsApp</h5>
            <p>
              <a href="https://wa.me/255712750468" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
                +255 712 750 468
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4 cont rounded mx-2">
          <div className=" text-light p-4">
            <h5>📧 Email</h5>
            <p>
              <a href="mailto:manfredbaraka33@gmail.com" className="text-decoration-none text-light">
                manfredbaraka33@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4 cont rounded mx-2">
          <div className=" text-light p-4">
            <h5><i class="bi bi-linkedin"></i> LinkedIn</h5>
            <p>
              <a href="https://www.linkedin.com/in/manfredbaraka/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/manfredbaraka
              </a>
            </p>
          </div>
        </div>
      </div>
        </center>
    </div>
  );
};

export default Contacts;
