import "server-only";

let Footer = () => (
  <footer className="bg-primary py-4 font-bold text-white">
    <div className="container justify-between md:flex">
      <h4 className="my-2"> All rights reserved {new Date().getFullYear()}</h4>
      <h4 className="my-2">Created with React</h4>
    </div>
  </footer>
);

export default Footer;
