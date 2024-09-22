function Footer() {
  return (
    <footer className="flex flex-col p-16 font-[Montserrat] max-md:p-6 bg-gradient-to-r from-[#f9f4fb] to-[#fffaec]">
      {/* Up part */}
      <div className="flex justify-between items-start space-x-16  max-md:flex-col max-md:space-x-0 max-md:space-y-3">
        <div className="flex flex-col space-y-2 w-full min-w-[200px]">
          <h2 className="font-semibold text-[2rem]">Graso</h2>
          <div>
            <p>
              Graso is a decentralized platform powered by the Sui Network,
              providing developers and individual investors access to the real
              estate market. By leveraging blockchain technology, it ensures
              transparency, security, and efficiency in property transactions.
              Supported by the Sui on Campus initiative.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-start w-full [&_h2]:text-[1.5rem] space-x-10 max-md:space-x-0  max-md:flex-col">
          <div className="flex flex-col space-y-2 w-1/3 min-w-[100px]">
            <h2 className="font-semibold">COMMUNITY</h2>
            <div className="flex flex-col space-y-2 [&_p]:cursor-pointer">
              <p>Discord</p>
              <p>Telegram</p>
              <p>WhatsApp</p>
              <p>Twitter</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-1/3 min-w-[100px]">
            <h2 className="font-semibold">LEARN</h2>
            <div className="flex flex-col space-y-2 [&_p]:cursor-pointer">
              <p>Whitepaper</p>
              <p>Medium</p>
              <p>Blog</p>
              <p>Articles</p>
              <p>Tokenomics</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-1/3 min-w-[100px]">
            <h2 className="font-semibold">ABOUT</h2>
            <div className="flex flex-col space-y-2 [&_p]:cursor-pointer">
              <p>Contact</p>
              <p>Careers</p>
              <p>Trademark Policy</p>
              <p>Media Kit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Part */}
      <div className="w-full max-w-full h-[0.01rem] bg-gray-300 mx-auto my-5"></div>
      <div className="flex justify-between items-start space-x-10 max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:space-x-0">
        <div className="w-full mt-1 max-md:text-center min-w-[100px]">
          <p className="text-gray-400">
            Copyright &copy; {new Date().getFullYear()} GRASO. All rights
            reserved.{" "}
          </p>
        </div>

        <div className="w-full">
          <ul className="flex space-x-6 justify-center [&_li]:cursor-pointer max-md:flex-col max-md:space-x-0 max-md:space-y-3 min-w-[400px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
