import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const IconSVG = ({ shape }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative -top-3" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {shape === "close" ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : shape === "hamburger" ? <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> : null}
    </svg>
  );
};

// eslint-disable-next-line react/prop-types
const NavLink = ({ linkPath, linkName }) => {
  const location = useLocation();
  const isActive = location.pathname === linkPath;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-gray-600">
      <Link to={linkPath} className={`flex items-center group relative transition-colors duration-300 text-color-blue-gray-500`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="justify-center">{linkName}</div>
        {(isHovered || isActive) && <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>}
      </Link>
    </Typography>
  );
};

const NavLinkList = () => {
  return (
    // Joshua fixed the 'items-end' class
    <ul className="mb-4 mt-2 flex flex-col items-end gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink linkPath="/tracker" linkName="Blood Sugar Tracker" />
      <NavLink linkPath="/metrics" linkName="Health Metrics" />
      <NavLink linkPath="/achievements" linkName="Achievements" />
      <NavLink linkPath="/community" linkName="Community" />
      <NavLink linkPath="/profile" linkName="Profile" />
    </ul>
  );
};

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth > 960 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar className="bg-slate-300 sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-b-2 border-slate-gray">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography variant="small" className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/">
              <span className="text-3xl text-gray-800">VitaTrack</span>
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <NavLinkList />
            </div>
            <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
              {openNav ? <IconSVG shape="close" /> : <IconSVG shape="hamburger" />}
            </IconButton>
          </div>
        </div>
        {/* Joshua and Keeanu helped me fix this */}
        <Collapse className="bg-slate-300" open={openNav}>
          <NavLinkList />
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
