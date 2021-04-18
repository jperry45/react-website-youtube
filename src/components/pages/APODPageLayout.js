import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import APODSection from '../APODSection';

export default function APODPageLayout() {
  return (
    <>
      <APODSection />
      <Footer />
    </>
  );
}
