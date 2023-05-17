function Header() {
  return (
    <div className="flex items-center gap-5 mb-5 flex-col md:flex-row">
      <div className="nf nf-fa-user_secret text-8xl"></div>
      <div className="flex flex-col justify-center md:justify-start">
        <h1 className="text-3xl font-semibold">Rahman Muhaemin</h1>
        <h3 className="text-center md:text-left">Fullstack Developer</h3>
      </div>
    </div>
  );
}

export default Header;
