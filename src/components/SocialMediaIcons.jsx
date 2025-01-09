

const SocialMediaIcons = () => {

  const SocialMedia = ({link, socialType}) => {

    return (
      <div className="relative">
        <a href={link} className="cursor-alias" target="_blank" rel="noreferrer">
          <img className="max-w-[40px]" alt={`${socialType}-link`} src={`../assets/${socialType}.png`}/>
          <img
            className="absolute inset-0 w-full max-w-xs h-full object-cover opacity-0 group-hover:opacity-100 hover:opacity-100 hover:animate-ping transition duration-500)"
            alt={`${socialType}-link`}
            src={`../assets/${socialType}-color.png`}
          />
        </a>
      </div>
    );
  };


  return (
    <div className="flex justify-center md:justify-start my-4 gap-7 extra-small-screens:gap-3">
      <SocialMedia link="https://www.facebook.com/profile.php?id=100079154672981"  socialType="facebook" />
      <SocialMedia link="https://www.linkedin.com/in/sebastianfontana/" socialType="linkedin" />
      <SocialMedia link="https://twitter.com/Sebastianf_27" socialType="twitter" />
      <SocialMedia link="https://www.instagram.com/sbn7.dev/" socialType="instagram" />
      <SocialMedia link="https://github.com/sebastianf777" socialType="github" />
    </div>
  );
};

export default SocialMediaIcons;
