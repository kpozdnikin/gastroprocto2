import React from 'react';
import Cert_1 from '../assets/img/Cert1.svg';
import Cert_2 from '../assets/img/certif_2.png';
import Cert_3 from '../assets/img/certif_3.png';
import Cert_4 from '../assets/img/certif_4.png';
import Cert_5 from '../assets/img/certif_5.png';
import Cert_6 from '../assets/img/certif_6.png';

const Serts = () => {
  return (
    <div className="certs">
      <img src={Cert_1} alt="doctor's certificate" />
      <img src={Cert_2} alt="doctor's certificate" />
      <img src={Cert_3} alt="doctor's certificate" />
      <img src={Cert_4} alt="doctor's certificate" />
      <img src={Cert_5} alt="doctor's certificate" />
      <img src={Cert_6} alt="doctor's certificate" />
    </div>
  );
};

export default Serts;
