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
        return (
          <div key={i}>
            <li
              className={`list-none text-sm font-medium tracking-wide transition-all duration-200
                ${link.name === "Logout"
                  ? "text-red-500 hover:text-red-600"
                  : isActive
                    ? "text-[#1a2744] font-semibold"
                    : "text-[#6b7280] hover:text-[#1a2744]"
                }
                ${props.alternative ? "py-2 px-3 rounded-lg hover:bg-[#faf6f0]" : "pb-1 border-b-2 border-transparent hover:border-[#1a2744]"}
              `}
              onClick={() => {
                if (link.name === "Logout") handleLogout();
                if (props.handleClick) props.handleClick();
              }}
            >
              <Link
                to={link.link}
                onClick={() => {
                  if (link.name === "Logout") handleLogout();
                }}
              >
                {link.name}
              </Link>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default Navlinks;
