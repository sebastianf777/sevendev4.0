import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10">
      <div className="w-10/12 mx-auto flex flex-col justify-center">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className=" text-2xl text-white">
            Sebastian Fontana
          </p>
          <p className="mt-3 text-md text-white">
             Sebastian Fontana ©2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
