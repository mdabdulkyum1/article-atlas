'use client'
 
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({user}) => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "font-bold border-gray-800 border-b-2" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`${
            pathname === "/profile" ? "font-bold border-gray-800 border-b-2" : ""
          }`}
        >
          Profile
        </Link>
      </li>
    </>
  );
  
  console.log(user);

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Article Atlas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">

      
      {
        user ? <Link href="/api/auth/logout" className="btn btn-sm bg-slate-600 text-white">Log out</Link> 
        :
        <div className="">
          <Link
          href="/api/auth/login"
          className="btn btn-sm bg-slate-600 text-white"
        >
          Sign in
        </Link>
        <Link
          href="/api/auth/register"
          className="btn btn-sm bg-slate-600 text-white"
        >
          Sign up
        </Link>
        </div>

      }



      </div>
    </nav>
  );
};

export default Navbar;
