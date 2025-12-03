const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center text-slate-600">
        <p>
          &copy; {new Date().getFullYear()} Full Stack Developer. Built By{" "}
          <b>Amir Suliman</b> With ❤️.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
