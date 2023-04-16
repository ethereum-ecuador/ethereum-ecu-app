import React from 'react';

export const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://cdn.leonardo.ai/users/c52f45ae-576d-4f2f-ae5a-01d5f5ae5827/generations/834eaa41-333a-455c-b86b-b8fd21d127e6/Leonardo_Diffusion_ethereum_symbol_as_background_background_co_0.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center relative">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Título Grande
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl">
          Subtítulo un poco menor
        </p>
      </div>
    </div>
  );
};


