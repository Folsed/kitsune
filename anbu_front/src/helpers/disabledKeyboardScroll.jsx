import React, { useEffect } from 'react';

function disableKeyboardScroll() {
    useEffect(() => {
        const preventDefault = (event) => {
            const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

            if (keys[event.keyCode]) {
                event.preventDefault();
            }
        }

        // Add event listener for keydown event
        document.addEventListener("keydown", preventDefault, false);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener("keydown", preventDefault, false);
        }
    }, []);
}

export default disableKeyboardScroll;