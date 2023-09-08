import React from 'react';

interface ShortenButtonProps {
  onClick: () => void;
}

const ShortenButton: React.FC<ShortenButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 bg-blue-500 text-white rounded"
    >
      Shorten
    </button>
  );
};

export default ShortenButton;
