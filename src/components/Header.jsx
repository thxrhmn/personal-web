function Header() {
  return (
    <div className="flex items-center gap-5 mb-3">
      <div>
        <img
          src="https://i.pinimg.com/originals/47/4f/5f/474f5fa00f60fb5c2e47c9dfcd7b1593.jpg"
          alt=""
          width="100px"
          height="100px"
          className="rounded-full"
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold">Rahman Muhaemin</h1>
        <h3>Fullstack Developer</h3>
      </div>
    </div>
  );
}

export default Header;
