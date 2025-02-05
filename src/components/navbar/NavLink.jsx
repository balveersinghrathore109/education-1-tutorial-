import { Link } from 'react-scroll'

const NavLink = ({href, title}) => {
  return (
    <li className="list-none cursor-pointer mr-8">
        <Link to={href} spy={true} smooth={true} duration={500} offset={-50} className="font-bold transition-all duration-300">{title}</Link>
    </li>
  );
};

export default NavLink;
