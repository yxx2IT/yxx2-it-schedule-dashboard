import osefatul from "../src/imgs/team/osefatul.png";
import omid from "../src/imgs/team/omid.png";
import brock from "../src/imgs/team//brock.png";
import rajan from "../src/imgs/team/rajan.png";
import ravinder from "../src/imgs/team/ravinder.png";
import saaed from "../src/imgs/team/saaed.png";
import milad from "../src/imgs/team/milad.jpg";
import yuan from "../src/imgs/team/yuan.png";

// Team Data
export const data = [
  {
    id: 0,
    name: "Pedersen, Brock",
    login: "bppeders",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=bppeders",
    badge: brock,
    title: "manager",
  },
  {
    id: 1,
    name: "Ghorbani, Omid",
    login: "omidghor",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=omidghor",
    badge: omid,
  },

  {
    id: 3,
    name: "Singh, Ravinder",
    login: "rsinghof",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=rsinghof",
    badge: ravinder,
  },
  {
    id: 4,
    name: "Kaur, Rajandeep",
    login: "rrrajand",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=rrrajand",
    badge: rajan,
  },
  {
    id: 5,
    name: "Khiabani, Saaed",
    login: "ksaaed",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=ksaaed",
    badge: saaed,
  },

  {
    id: 6,
    name: "hosseini , Milad Mohammad",
    login: "amiladmo",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=amiladmo",
    badge: milad,
  },
  {
    id: 7,
    name: "Omar, Sefatullah",
    login: "osefatul",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=osefatul",
    badge: osefatul,
  },

  {
    id: 8,
    name: "Wu, Yuan",
    login: "cwuamzn",
    image:
      "https://internal-cdn.amazon.com/badgephotos.amazon.com/phone-image.pl?uid=cwuamzn",
    badge: yuan,
  },
];

export const shifts = {
  FHD: "rrrajand", //FrontHalf
  preDonut: [ "rrrajand"], //Monday + tuesday
  WednesdayDay: ["rrrajand", "rsinghof",],
  postDonut: ["rsinghof"], //Thursday + Friday
  BHD: "rsinghof", //BackHalf Day
  
  MD: [], // MidDay-Shift

  FHN: ["ksaaed"], //Front-Half Night Shift
  wednesdayNight: ["ksaaed", "amiladmo"],
  BHN: ["amiladmo"], //Back-Half Night
};


