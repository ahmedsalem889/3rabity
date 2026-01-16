import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IoChevronDown, IoChevronUp, IoCloseCircle } from 'react-icons/io5';

interface Option {
    id: string;
    label: string;
}

interface MultiSelectComboBoxProps {
    options: Option[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string; // Allow external styling
}

const MultiSelectComboBox: React.FC<MultiSelectComboBoxProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Select items...',
    disabled = false,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Map selected IDs to Option objects
    const selectedOptions = useMemo(() =>
        options.filter(opt => value.includes(opt.id)),
        [options, value]
    );

    // Filter available options based on search term
    const filteredOptions = useMemo(() =>
        options.filter(opt =>
            opt.label.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [options, searchTerm]
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionId: string) => {
        // Toggle selection
        if (value.includes(optionId)) {
            onChange(value.filter(id => id !== optionId));
        } else {
            onChange([...value, optionId]);
        }
    };

    const handleRemove = (e: React.MouseEvent, optionId: string) => {
        e.stopPropagation(); // Prevent dropdown toggle
        onChange(value.filter(id => id !== optionId));
    };

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                // Focus search input when opening? Optional.
            }
        }
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Main Input Area */}
            <div
                className={`min-h-[42px] px-3 py-2 border rounded-md bg-white cursor-pointer flex flex-wrap items-center gap-2 transition-colors
                    ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:border-gray-400'}
                    ${isOpen ? 'border-primary ring-1 ring-primary' : 'border-gray-300'}
                `}
                onClick={toggleDropdown}
            >
                {selectedOptions.length === 0 && (
                    <span className="text-gray-400 select-none">{placeholder}</span>
                )}

                {selectedOptions.map(option => (
                    <span
                        key={option.id}
                        className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md flex items-center gap-1 border border-gray-200"
                    >
                        {option.label}
                        <button
                            type="button"
                            onClick={(e) => handleRemove(e, option.id)}
                            className="text-gray-500 hover:text-red-500 transition-colors focus:outline-none"
                            disabled={disabled}
                        >
                            <IoCloseCircle size={16} />
                        </button>
                    </span>
                ))}

                <div className="ml-auto pl-2 text-gray-400">
                    {isOpen ? <IoChevronUp /> : <IoChevronDown />}
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && !disabled && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 flex flex-col">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-100 sticky top-0 bg-white rounded-t-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            autoFocus
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking search
                        />
                    </div>

                    {/* Options List */}
                    <div className="overflow-y-auto flex-1 py-1">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map(option => {
                                const isSelected = value.includes(option.id);
                                return (
                                    <div
                                        key={option.id}
                                        onClick={() => handleSelect(option.id)}
                                        className={`px-3 py-2 text-sm cursor-pointer flex items-center justify-between
                                            ${isSelected ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}
                                        `}
                                    >
                                        <span>{option.label}</span>
                                        {isSelected && <span className="text-red-600">✓</span>}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="px-3 py-4 text-center text-sm text-gray-400">
                                No items found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelectComboBox;
