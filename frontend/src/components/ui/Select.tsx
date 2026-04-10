import { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Select = ({ options, value, onChange, placeholder = "Seleccionar..." }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div
                className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
        <span className={selectedOption ? styles.textSelected : styles.textPlaceholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
            </div>
            {isOpen && (
                <ul className={styles.dropdown}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`${styles.option} ${value === option.value ? styles.optionSelected : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false); // Cerramos al seleccionar
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};