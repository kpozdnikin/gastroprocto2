import React, {useState} from 'react';
import CertTile from './CertTile';

import Cert_1 from '../assets/img/cert1.jpg';
import Cert_2 from '../assets/img/cert2.jpg';
import Cert_3 from '../assets/img/cert1.jpg';
import Cert_4 from '../assets/img/cert4.jpg';
import Cert_5 from '../assets/img/cert1.jpg';
import Cert_6 from '../assets/img/cert2.jpg';

const dataCert = [{
        id: 1,
        name: 'cert1',
        url: Cert_1,
        title: 'Сертификат доктора',
        opened: false
    }, {
        id: 2,
        name: 'cert2',
        url: Cert_2,
        title: 'Сертификат доктора',
        opened: false
    }, {
        id: 3,
        name: 'cert3',
        url: Cert_3,
        title: 'Сертификат доктора',
        opened: false
    }, {
        id: 4,
        name: 'cert4',
        url: Cert_4,
        title: 'Сертификат доктора',
        opened: false
    }, {
        id: 5,
        name: 'cert5',
        url: Cert_5,
        title: 'Сертификат доктора',
        opened: false
    }, {
        id: 6,
        name: 'cert6',
        url: Cert_6,
        title: 'Сертификат доктора',
        opened: false
}];


const Certs = () => {
    const [certificat, setCertificat] = useState(dataCert);

    function toggleImg(id) {
        setCertificat(
            certificat.map(c => {
                if (c.id === id) {
                    c.opened = !c.opened;
                }
                return c;
            }));
    }
  return (
    <div className="certs">
        {
            certificat.map(x => {
                return <CertTile data={x} key={x.id} onChange={toggleImg}/>;
            })
        }
    </div>
  );
};

export default Certs;
