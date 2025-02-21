import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ITextDel } from "@/assets";

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: string;
    className?: string;
}

const InputComponent: React.FC<InputProps> = ({ id, type, placeholder, register, error, className }) => {
    const [inputValue, setInputValue] = useState("");

    const handleClearInput = () => setInputValue("");

    return (
        <div>
            <div className={`relative ${className}`}>
                <input
                    id={id}
                    type={type}
                    {...register}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-[92%] p-2 border border-gray-300 rounded-lg pl-12 pr-10"
                />

                {inputValue && (
                    <button type="button" onClick={handleClearInput} className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
                        <ITextDel />
                    </button>
                )}
            </div>

            <div className="h-[15px]">
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </div>
    );
};

export default InputComponent;
