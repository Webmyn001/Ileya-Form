import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navlinks(props) {
  const location = useLocation();

  const Links = [
    { name: "Dashboard", link: "/ileya/admin", danger: false },
    { name: "Back to Site", link: "/", danger: false },
    { name: "Logout", link: "/ileya", danger: true },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('ileya_admin');
  };

  return (
    <>
      {Links.map((link, i) => {
        const isActive = location.pathname === link.link;
        const isLogout = link.name === "Logout";

        if (props.alternative) {
          return (
            <Link
              key={i}
              to={link.link}
              onClick={() => {
                if (isLogout) handleLogout();
                if (props.handleClick) props.handleClick();
              }}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isLogout
                  ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-600/20 text-center hover:bg-red-700'
                  : isActive
                    ? 'text-[#1a2744] bg-[#faf6f0] font-semibold'
                    : 'text-[#6b7280] hover:text-[#1a2744] hover:bg-[#faf6f0]'
              }`}
            >
              {link.name}
            </Link>
          );
        }

        return (
          <Link
            key={i}
            to={link.link}
            onClick={() => {
              if (isLogout) handleLogout();
            }}
            className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isLogout
                ? 'text-red-500 hover:text-red-600 hover:bg-red-50'
                : isActive
                  ? 'text-[#1a2744] bg-[#1a2744]/5'
                  : 'text-[#6b7280] hover:text-[#1a2744] hover:bg-[#1a2744]/5'
            }`}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a8882e] rounded-full" />
            )}
          </Link>
        );
      })}
    </>
  );
}

export default Navlinks;
