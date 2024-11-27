import { Stack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const sectionData = [
    {
        name: "Home",
        type: "page",
        url: "/",
        id: 1
    },
    {
        name: "About",
        type: "section",
        url: "about-section",
        id: 2
    },
    {
        name: "Menu",
        type: "page",
        url: "/menu",
        id: 3
    },
    {
        name: "Reservation",
        type: "page",
        url: "/reservation",
        id: 4
    },
    {
        name: "Order Online",
        type: "page",
        url: "/cart",
        id: 5
    },
    {
        name: "Log In",
        type: "page",
        url: "/login",
        id: 6
    },
];

const handleClick = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

const Nav = ({direction}) => {
    const location = useLocation();
    return (
      <nav>
        <Stack
          direction={direction}
          gap={direction==="row"? "5" : "0"}
        >
            {sectionData.map((section) => {
                return location.pathname !== '/' && section.type === 'section' ? (
                  null
                ) : (
                  section.type ==="page" ? (
                    <Link
                      className="button"
                      id={section.id}
                      key={section.id}
                      to={section.url}
                    >
                        <p>{section.name}</p>
                    </Link>
                ) : (
                    <Link
                      className="button"
                      id={section.id}
                      key={section.id}
                      onClick={handleClick(section.url)}
                    >
                        <p>{section.name}</p>
                    </Link>
                ))
            })}
        </Stack>
      </nav>
    );
};

export default Nav;