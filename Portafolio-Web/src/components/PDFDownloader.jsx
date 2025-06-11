import React from 'react';
import * as FaIcons from 'react-icons/fa';

const PDFDownloader = () => {
  return (
    <a
      href="/CV_Manuel_Ulin.pdf"
      download="CV_Manuel_Ulin.pdf"
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <FaIcons.FaDownload className="w-5 h-5 mr-2" />
      Descargar PDF
    </a>
  );
};

export default PDFDownloader; 