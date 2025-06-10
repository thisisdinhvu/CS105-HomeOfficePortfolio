import "./Menu.scss"
import { NavLink } from "react-router"

const Menu = () => {
    const buttonClassNames = "nav-button";

    return (
        <nav className="menu">
            <NavLink to="/">
                <svg
                    className={`home-button ${buttonClassNames}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V13H9v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
                </svg>
            </NavLink>

            <NavLink to="/about">
                <svg
                    className={`about-button ${buttonClassNames}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            </NavLink>

            <NavLink to="/about-2">
                <svg
                    className={`about-button-2 ${buttonClassNames}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h3a2 2 0 0 1 0 4h-1a1 1 0 0 0 0 2h2" />
                    <path d="M12 17h.01" />
                </svg>
            </NavLink>

            <NavLink to="/dev-work">
                <svg
                    className={`dev-button ${buttonClassNames}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 18 22 12 16 6" />
                    <path d="M8 6 2 12 8 18" />
                </svg>
            </NavLink>

            <NavLink to="/dev-work-2">
                <svg
                    className={`dev-button-2 ${buttonClassNames}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 4h16v4H4z" />
                    <path d="M4 12h16v8H4z" />
                    <path d="M12 12v8" />
                </svg>
            </NavLink>
        </nav>
    );
};

export default Menu;
