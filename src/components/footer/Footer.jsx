import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import fileSureLogoLight from "../../assets/logo_white.svg";
import "./footer.scss";

const Footer = () => {
  const arr = [
    {
      label: "Company",
      children: [
        {
          name: "About",
        },
        {
          name: "Pricing",
        },
        {
          name: "Careers",
        },
      ],
    },
    {
      label: "Solution",
      children: [
        {
          name: "Search",
        },
        {
          name: "Connect",
        },
        {
          name: "Research",
        },
        {
          name: "Academy",
        },
      ],
    },
    {
      label: "Resources",
      children: [
        {
          name: "Blogs",
        },
        {
          name: "Forms",
        },
      ],
    },
    {
      label: "Support",
      children: [
        {
          name: "Help",
        },
        {
          name: "Contact Us",
        },
      ],
    },
    {
      label: "Legal",
      children: [
        {
          name: "Privacy",
        },
        {
          name: "Terms",
        },
        {
          name: "Accessbility",
        },
      ],
    },
  ];

  return (
    <div className="footer">
      {/* top*/}
      <div className="main">
        <div className="top">
          <div className="logo">
            <img src={fileSureLogoLight} className="" />
            <p className="">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>

          <div className="right">
            {arr.map((item, ind) => (
              <div className="items" key={ind}>
                <h4 className="">{item.label}</h4>
                {item.children.map((value, i) => (
                  <div key={i}>
                    <div className="">{value.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </div>
          <div className="right">
            <img src={facebook} />
            <img src={instagram} />
            <img src={LinkedIn} />
            <img src={whatsapp} />
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="bottom">
        Registered trademark of FileSure India Private Limited &#169; 2023
        Filesure Inc. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
