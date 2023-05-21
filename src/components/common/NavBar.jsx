import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const IconSVG = ({ shape }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {shape === "close" ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : shape === "hamburger" ? <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> : null}
    </svg>
  );
};

// eslint-disable-next-line react/prop-types
const NavLink = ({ linkPath, linkName }) => {
  return (
    <>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to={linkPath} className="flex items-center">
          {linkName}
        </Link>
      </Typography>
    </>
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
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography variant="small" className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/"> VitaTrack</Link>
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
        <Collapse className="flex justify-end" open={openNav}>
          <NavLinkList />
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
