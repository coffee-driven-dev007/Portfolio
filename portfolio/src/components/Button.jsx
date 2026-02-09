import React, { useState, useEffect } from "react";

const Button = ({ name, isBeam = false, containerClass }) => {

    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3s
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <button onClick={handleClick} className={`btn ${containerClass}`} >
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )}
            {name}
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-1/2 left-[20%] bg-black-100 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeIn">
                    “I’m self-taught — my life is one big README of trial and error.”


                </div>
            )}
        </button>
    );
};

export default Button;