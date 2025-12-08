const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 dark:bg-slate-900 dark:border-slate-800">
    <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-300">
     
        <p>
          &copy; {new Date().getFullYear()} Full Stack Developer. Built By{" "}
          <b>Amir Suliman</b> With ❤️.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
