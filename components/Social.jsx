import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/maliko18" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/malex.nr" },
  { icon: <FaTwitter />, path: "https://x.com/maliko_01" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/abdelmalek-nourine-01738325a/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
