import Link from "next/link";


const Footer = () => {
    return (
      <div className=" bg-neutral text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h1 className="text-xl font-semibold">ArticleAtlas</h1>
            <p className="text-sm">Explore, Read, Discover</p>
          </div>
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <Link href="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300">Contact</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ArticleAtlas. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  