import React, { useState, useEffect, useRef } from 'react';
import './CustomSelect.css'; // Import your custom styles

interface CustomSelectProps {
  options: string[];
  placeholder: string;
  onSelect: (selectedOption: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to track the dropdown

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the dropdown if clicking outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <div className="custom-select" onClick={handleToggle}>
        {selectedOption || placeholder}
        <span className="custom-arrow">&#9660;</span>
      </div>
      {isOpen && (
        <ul
          className={`custom-select-options ${isOpen ? 'open' : 'close'}`}
        >
          {options.map((option) => (
            <li
              key={option}
              className="custom-select-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
