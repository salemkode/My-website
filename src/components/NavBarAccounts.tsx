import GithubIcon from "@assets/images/accounts/github.svg";
import GitlabIcon from "@assets/images/accounts/gitlab.svg";
import TelegramIcon from "@assets/images/accounts/telegram.svg";
import TwitterIcon from "@assets/images/accounts/twitter.svg";
import Image from "next/image";

const NavBarAccounts = () => {
  const accounts = [
    {
      name: "gitlab",
      url: "https://gitlab.com/salemkode",
      icon: GitlabIcon,
    },
    {
      name: "github",
      url: "https://github.com/salemkode",
      icon: GithubIcon,
    },
    {
      name: "telegram",
      url: "https://t.me/salemkode",
      icon: TelegramIcon,
    },
    {
      name: "twitter",
      url: "https://twitter.com/salemkode",
      icon: TwitterIcon,
    },
  ] as const;

  return (
    <ul className="flex my-3 md:m-0">
      {accounts.map(({ name, icon, url }) => {
        return (
          <li
            className="mx-1 block rounded-full p-1.5 transition border-primary border hover:bg-[#21242926] "
            key={name}
          >
            <a href={url} target="_blank">
              <Image
                src={icon.src}
                alt={`social media url of ${name}`}
                width={30}
                height={30}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarAccounts;
