function Contact() {
  return (
    <div className="mb-5">
      <h1 className="font-semibold text-xl mb-3 text-center md:text-left">
        Contact
      </h1>
      <div className="flex gap-2 flex-wrap justify-center md:justify-start">
        <a href="https://github.ocm/thxrhmn">
          <div className="border rounded-md border-solid border-white p-2">
            Github<span className="nf nf-dev-github_badge text-xl ml-3"></span>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md border-solid border-white p-2">
            Likedin<span className="nf nf-md-linkedin text-xl ml-3"></span>
          </div>
        </a>
        <a href="https://thxrhmn.t.me">
          <div className="border rounded-md border-solid border-white p-2">
            Telegram<span className="nf nf-fa-telegram text-xl ml-3"></span>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md border-solid border-white p-2">
            Whatsapp<span className="nf nf-fa-whatsapp text-xl ml-3"></span>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md border-solid border-white p-2">
            Email<span className="nf nf-md-email text-xl ml-3"></span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
