import FooterLinks from "./FooterLinks";

const Footer = () => {
    const firstColumnLinks = [
        { href: "#", text: "FAQs" },
        { href: "#", text: "Privacy Policy" },
        {
          href: "#",
          text: "Pricing, Delivery, Return and Refund Policy",
        },
        { href: "#", text: "Terms and Conditions" },
        { href: "#", text: "Disclaimer" },
    ];
    
     const secondColumnLinks = [
        { href: "#", text: "Contact Us" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Join Us" },
        { href: "#", text: "Pickup Points" },
    ];
    return(
        <footer className="bg-white pt-12 px-12 pb-0 border-t border-t-gray-300">
      <div className="flex flex-wrap w-full">
        <div className="basis-1/2 flex-grow-0 max-w-1/2">
          <div>
            
            <p className="font-normal text-[var(--font-xs)] text-[#373737] pb-5">
              Download DMart Ready Mobile App Now!!
            </p>
            <div className="mt-4 -m-1 flex flex-wrap w-full">
              <a href="#">
                <img
                  className="h-10 w-[150px] border-0"
                  alt="Android"
                  src="https://cdn.dmart.in/images/rwd/footer/google-play.svg"
                />
              </a>
              <a href="#">
                <img
                  className="h-10 w-[150px] border-0"
                  alt="IOS"
                  src="https://cdn.dmart.in/images/rwd/footer/download-app-store.svg"
                />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap">
              <img
                className="mr-1"
                alt="visa"
                src="https://cdn.dmart.in/images/rwd/footer/visa.svg"
              />
              <img
                className="mr-1"
                alt="master"
                src="https://cdn.dmart.in/images/rwd/footer/mastercard.svg"
              />
              <img
                className="mr-1"
                alt="american"
                src="https://cdn.dmart.in/images/rwd/footer/american.svg"
              />
              <img
                className="mr-1"
                alt="rupay"
                src="https://cdn.dmart.in/images/rwd/footer/rupay.svg"
              />
              <img
                className="mr-1"
                alt="cod"
                src="https://cdn.dmart.in/images/rwd/footer/cash_outlined.svg"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-grow-0 max-w-1/2">
          <FooterLinks links={firstColumnLinks}/>
          <FooterLinks links={secondColumnLinks}/>
        </div>
      </div>
      <div className="mt-12 border-t-[0.5px] border-t-gray-300  py-[15px]">
          <p className="text-center leading-[19px] font-normal text-sm text-[#373737]">
            Copyright © 2025 Avenue E-Commerce Limited
            (AEL). All Rights Reserved.
          </p>
        </div>
    </footer>
    )
}
export default Footer;