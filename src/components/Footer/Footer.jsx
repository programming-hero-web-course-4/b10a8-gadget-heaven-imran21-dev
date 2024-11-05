

const Footer = () => {
    return (
        <div className="bg-white text-center">
     <h1 className="text-3xl font-bold pt-20">Gadget Heaven</h1>
     <p className="text-black/60 pt-3">Leading the way in cutting-edge technology and innovation</p>
<footer className="footer  justify-items-center md:container mx-auto p-10">
  <nav className=" flex flex-col items-center text-sColor/60 text-base">
    <h6 className="text-lg text-black font-bold">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className=" flex flex-col items-center text-sColor/60 text-base">
    <h6 className="text-lg text-black font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>

  </nav>
  <nav className=" flex flex-col items-center text-sColor/60 text-base">
    <h6 className="text-lg text-black font-bold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

        </div>
    );
};

export default Footer;