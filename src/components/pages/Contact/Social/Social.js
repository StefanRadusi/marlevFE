import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Social.scss';

export function Social() {
  return (
      <div className="social">
        <h4>Social Media</h4>
        <a href="https://www.facebook.com/pg/Marlevinvest"><div className="facebook"> <p>Facebook</p><FacebookIcon/></div></a>

      </div>
  );
}
