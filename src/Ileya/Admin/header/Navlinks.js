import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navlinks(props) {
  const location = useLocation();

  const Links = [
    { name: "Dashboard", link: "/ileya/admin" },
    { name: "Back to Site", link: "/" },
    { name: "Logout", link: "/ileya" },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('ileya_admin');
  };

  return (
    <>
      {Links.map((link, i) => {
        const isActive = location.pathname === link.link;
        const isLogout = link.name === "Logout";
        return (
          <li
            key={i}
            className={`list-none text-sm font-medium tracking-wide transition-all duration-200
              ${props.alternative
                ? "py-3 px-4 rounded-xl flex items-center"
                : "flex items-center"
              }
              ${
                props.alternative
                  ? isLogout
                    ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                    : isActive
                      ? "text-[#1a2744] bg-[#faf6f0] font-semibold"
                      : "text-[#6b7280] hover:text-[#1a2744] hover:bg-[#faf6f0]"
                  : isLogout
                    ? "text-red-500 hover:text-red-600"
                    : isActive
                      ? "text-[#1a2744] font-semibold"
                      : "text-[#6b7280] hover:text-[#1a2744]"
              }
              ${!props.alternative && !isLogout && isActive
                ? "border-b-2 border-[#c9a84c]"
                : !props.alternative && "border-b-2 border-transparent hover:border-[#1a2744]"
              }
            `}
          >
            <Link
              to={link.link}
              className={`w-full ${props.alternative ? "block" : ""}`}
              onClick={() => {
                if (isLogout) handleLogout();
                if (props.handleClick) props.handleClick();
              }}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default Navlinks;
