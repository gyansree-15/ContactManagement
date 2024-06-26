import { Link } from "react-router-dom";

const buttonStyle = "bg-black hover:bg-white hover:text-black p-5 text-white text-xl";
const linkStyle = "w-fit";

const Navbar = () => {
  return (
    <nav className="bg-black p-20 flex basis-1/5 gap-2 flex-row md:flex-col">
      <Link to="/contacts" className={linkStyle} >
        <button className={buttonStyle}>Contacts</button>
      </Link>
      <Link to="/chartandmaps" className={linkStyle}>
        <button className={buttonStyle}>Charts & Maps</button>
      </Link>
    </nav>
  );
};

export default Navbar;
