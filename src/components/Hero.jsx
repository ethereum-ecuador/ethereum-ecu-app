import React from 'react';
import { Speakers } from '@/components/Speakers';

export const Hero = () => {
  return (
    <div
      className="relative bg-top bg-cover min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.2), rgba(128, 0, 128, 0.2)), url('https://cdn.leonardo.ai/users/c52f45ae-576d-4f2f-ae5a-01d5f5ae5827/generations/eba622f1-a078-4519-9c98-c8e75036beb3/variations/Default_Esta_impresionante_imagen_captura_la_esencia_de_la_mit_0_eba622f1-a078-4519-9c98-c8e75036beb3_1.jpg')`,
      }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="text-center relative">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Road To
          </h2>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Blockchain Week
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-6">
            Quito, Ecuador
          </p>
          <div>
            <a
              href="#tickets"
              className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Obtén tus tickets
            </a>
            <a
              href="#info"
              className="inline-block ml-4 px-6 py-3 text-xl font-semibold text-blue-500 bg-white border border-blue-500 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <Speakers />
      </div>
    </div>
  );
};
