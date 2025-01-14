import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-10 pt-[33px]">
      <div className="w-10/12 mx-auto flex flex-col justify-center pb-[30px]">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className=" text-2xl text-white mt-4">
            Sebastian Fontana
          </p>
          <p className="mt-6 text-md text-white">
             Sebastian Fontana ©2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
