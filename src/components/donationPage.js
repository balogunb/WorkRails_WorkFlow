import React from 'react';
import SliderComponent from './slider.js'
import DonationType from './donationType.js';
import DesignationSelect from './donationDesignation.js'

export default function DonationPage() {
  return (
    <React.Fragment>
      <SliderComponent/>
      <DonationType/>
      <DesignationSelect/>
    </React.Fragment>
  );
}