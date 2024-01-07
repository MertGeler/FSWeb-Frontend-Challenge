import JavascriptLogo from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import ReduxLogo from "../assets/redux1.png";
import NodeLogo from "../assets/node.png";
import VsCodeLogo from "../assets/vsCode.png";
import FigmaLogo from "../assets/figma.png";
import JavascriptDark from "../assets/jsDark.png";
import ReactDark from "../assets/reactDark.png";
import ReduxDark from "../assets/reduxDark.png";
import nodeDark from "../assets/nodeDark.png";
import vsDark from "../assets/vsCodeDark.png";
import figmaDark from "../assets/figmaDark.png";
import pizza from "../assets/pizza360.jpg";
import todo from "../assets/todo360.jpg";

const data = {
  tr: {
    header: {
      name: "Fahrettin Mert",
      title: "Ben Bir Front-End",
      titleSecond: "Developer'ım...",
      description:
        "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
      to: "TO",
      languageSwitch: "ENGLISH",
    },
    skills: {
      skils: "Yetenekler",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
    },
    profile: {
      profile: "Profil Bilgilerim",
      title: "Özgeçmişim",
      birthday: "Doğum Tarihi",
      city: "İkamet Şehri",
      graduatedFrom: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      response: {
        birthday: "25.07.2000",
        city: "İstanbul",
        graduatedFrom: "İstanbul Medeniyet Üni. Siyaset Bilimi, 2024",
        role: "Frontend",
      },
      aboutMe: "Hakkımda",
      aboutMeFirstP:
        "Gelecekte ne yapmam gerektiğini bilmiyordum. Bu kursla karşılaştıktan sonra artık ne olmak istediğimi biliyorum. ",
      aboutMeSecondP:
        "Araştırmayı ve öğrenmeyi seven, yazılıma meraklı ve ilgili birisiyim. ",
    },
    projects: {
      title: "Projelerim",
      visit: "Siteyi Görüntüle",
      projectsArray: [
        {
          title: "Pizza Sipariş Sayfası",
          img: pizza,
          description:
            "React uygulamasıyla yapılmış bir Pizza Sipariş Sitesi Projesi. Ana sayfa , Sipariş Sayfası ve Sipariş Tamamlandı Sayfalarından oluşmaktadır.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/MertGeler/fsweb-s7-challenge-pizza",
          url: "",
        },
        {
          title: "Yapılacaklar Listesi",
          img: todo,
          description:
            "Kağıt kalem kullanup yazmak yerine artık bilgisayar üzerinden ajanda kullanabileceğimiz bir uygulama.",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/MertGeler/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
        },
      ],
    },
    footer: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin...",
      mail: "geler818@gmail.com",
    },
  },

  en: {
    header: {
      name: "Fahrettin Mert",
      title: "I am a Front-End",
      titleSecond: "Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      to: "TÜRKÇE",
      languageSwitch: "'YE GEÇ",
    },
    skills: {
      skils: "Skills",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
    },
    profile: {
      profile: "Profile",
      title: "Basic Information",
      birthday: "Birthday",
      city: "City",
      graduatedFrom: "Educational Background",
      role: "Preferred Role",
      response: {
        birthday: "25.07.2000",
        city: "Istanbul",
        graduatedFrom: "Istanbul Medeniyet Uni. Political Science, 2024",
        role: "Frontend",
      },
      aboutMe: "About Me",
      aboutMeFirstP:
        "I didn't know what I should do in the future. After encountering this course, I now know what I want to be.",
      aboutMeSecondP:
        "I am someone who loves research and learning, is curious and interested in software.",
    },
    projects: {
      title: "Projects",
      visit: "View Site",
      projectsArray: [
        {
          title: "Pizza Challenge",
          img: pizza,
          description:
            "A Pizza Ordering Site Project made with React application. Home page, Order Page and Order Completed Page were created using SPA.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/MertGeler/fsweb-s7-challenge-pizza",
          url: "",
        },
        {
          title: "To Do List",
          img: todo,
          description:
            "An organizer application that you can use for both your work and daily life to make your life easier",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/MertGeler/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      mail: "geler818@gmail.com",
    },
  },
};

export default data;
