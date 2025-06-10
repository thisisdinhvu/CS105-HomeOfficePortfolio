import React, { useRef, useEffect } from "react";
import "./Logo.scss";
import gsap from "gsap";
import { useToggleRoomStore } from "../../Experience/stores/toggleRoomStore";

const Logo = () => {
  const { isHomeOffice2, isBeforeZooming } = useToggleRoomStore();
  const logoRef = useRef();

  const logoClassNames = `logo${!isHomeOffice2 ? " home-office-3" : ""}`;

  useEffect(() => {
    if (!logoRef.current) return;

    if (isBeforeZooming) {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  return (
    <>
      <div ref={logoRef} className={logoClassNames}>
        CS105
      </div>
    </>
  );
};

export default Logo;