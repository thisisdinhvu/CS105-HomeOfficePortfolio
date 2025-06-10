import React, { useRef, useEffect } from "react";
import "./RoomToggleButton.scss";
import { useToggleRoomStore } from '../../Experience/stores/toggleRoomStore.js'
import gsap from "gsap";

const RoomToggleButton = () => {
  const { isHomeOffice2, setHomeOffice2, isTransitioning, isBeforeZooming } =
    useToggleRoomStore();

  const toggleButtonRef = useRef();

  const handleToggle = () => {
    if (!isTransitioning) {
      setHomeOffice2(!isHomeOffice2);
    }
  };

  useEffect(() => {
    if (!toggleButtonRef.current) return;

    if (isBeforeZooming) {
      gsap.to(toggleButtonRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(toggleButtonRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  const buttonClassNames = `toggle-button${!isHomeOffice2 ? " home-office-3" : ""}`;

    return (
        <button
            ref={toggleButtonRef}
            className={buttonClassNames}
            onClick={handleToggle}
            aria-label="Toggle Room"
        >
            <span className="icon">
                <svg
                    width="18"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 2v6h-6" />
                    <path d="M3 22v-6h6" />
                    <path d="M21 8a9 9 0 0 0-15.5-5.9L3 8" />
                    <path d="M3 16a9 9 0 0 0 15.5 5.9L21 16" />
                </svg>
            </span>
        </button>
    );
};

export default RoomToggleButton;