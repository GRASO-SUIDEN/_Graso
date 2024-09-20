function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex-shrink-0">
        <h1 className="text-[#24C2A5] text-2xl font-bold">Graso</h1>
      </div>

      <div className="flex-grow flex justify-center">
        <ul className="flex space-x-8 text-lg cursor-pointer">
          <li>Home</li>
          <li>Explore</li>
          <li>Portfolio</li>
          <li>Whitepaper</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <button className="bg-[#24C2A5] text-white px-4 py-2 rounded-md font-semibold">
          Get started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
