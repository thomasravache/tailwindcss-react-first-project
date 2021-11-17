import React from 'react';
import myImage from '../images/foto-perfil-thomas.jpg';

const TestimonialItems = () => {
  return (
    <div
      className="bg-gray-100 p-8 shadow-md rounded-xl overflow-hidden md:flex md:items-center md:p-0"
    >
      <img className="w-40 h-40 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src={ myImage } alt="Minha imagem" />
      <div
        className="pt-6 text-center space-y-4 md:text-left md:p-8"
      >
        <div className="text-lg font-semibold">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur incidunt a quisquam et ipsam, quas fuga quo ratione ut soluta magni debitis, facere, autem maiores iusto nihil sed. Error?"
        </div>
        <div className="font-medium">
          <div className="text-blue-600 font-bold">Thomas Ravache</div>
          <div className="text-gray-500">Estudante de Desenvolvimento Web</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
