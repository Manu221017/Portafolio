import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPDF from './CVPDF';

const PDFDownloader = () => {
  return (
    <PDFDownloadLink
      document={<CVPDF />}
      fileName="CV_Manuel_Ulin.pdf"
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generando PDF...' : 'Descargar PDF'
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloader; 