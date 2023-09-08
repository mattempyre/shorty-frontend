import React from 'react';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

const UrlInput: React.FC<UrlInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="url"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 w-full mb-4 border text-gray-900 rounded"
      placeholder="Enter long URL"
    />
  );
};

export default UrlInput;
