import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "./layout";
import Seo from "./Seo";
import * as styles from "./index.module.css";
import '../styles/tailwind.css';
import museumVideo from '../videos/technische.mp4';
import bg_1 from '../images/Technikmuseum_D.png';
import muzeum from '../images/technikmuseum.png';
import dynamicBG from '../images/dynamic.png';
import Hermann_Oberth from '../images/Hermann_Oberth.png';

function HeroSection({ bgImage, title, description }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <div className="text-white p-20 bg-opacity-75 bg-black rounded">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-xl mt-4">{description}</p>
        <Link to="/Map" className="mt-8 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">Entdecken</Link>
      </div>
    </div>
  );
}

// Define the NewsFeedSection component
function NewsFeedSection({ newsItems }) {
  return (
    <div className="news-feed p-4">
      <h2 className="text-xl font-bold text-indigo-900 mb-4">Aktuelle Nachrichten</h2>
      {newsItems.map((item, index) => (
        <div key={index} className="news-item mb-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

function VideoAndNewsSection({ videoSrc, title, newsItems }) {
  return (
    <div className="flex flex-col md:flex-row my-16 max-h-screen">
      <div className="md:w-2/3 md:h-full">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <div className="video-container h-full">
          <video src={videoSrc} controls className="w-full h-full object-cover">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
      <div className="md:w-1/3 md:overflow-auto">
        <NewsFeedSection newsItems={newsItems} />
      </div>
    </div>
  );
}


const MuseumSection = ({ image, title, description }) => (
  <div className="museum-section flex flex-col md:flex-row items-center
   bg-white bg-opacity-60 rounded-lg shadow-lg overflow-hidden my-16">
    <div className="md:w-1/3">
      <img src={image} alt={title} className="object-cover lg:w-64 h-48 w-full" />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold text-indigo-900">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  </div>
);

export default function Main() {
  // Define the newsItems array
  const newsItems = [
    {
      title: "News Title 1",
      summary: "Summary of the first piece of news."
    },
    {
      title: "News Title 2",
      summary: "Summary of the second piece of news."
    },
    // Add more news items as necessary
  ];

  return (
    <section>
      <Seo title="Home" />

      <HeroSection
        bgImage={dynamicBG}
        title="Technikwunder entdecken"
        description="Tauchen Sie ein in das Abenteuer Technologie!
         Unsere technischen Museen bieten eine interaktive Reise durch die Meilensteine der Ingenieurskunst.
         Vom ersten Dampfmotor bis zur Spitze der modernen Robotik - erleben Sie, wie Innovationen unsere Welt geformt haben und weiterhin prägen.
          Kommen Sie und entdecken Sie die Faszination der Technik, die Vergangenheit beleuchtet und die Zukunft inspiriert."
        />

      <div className="video-and-news-section mb-16">
        <VideoAndNewsSection
          videoSrc={museumVideo}
          title="Unser Museumsvideo"
          newsItems={newsItems}
        />
      </div>

      {/* This div will create a space that allows the HeroSection to be partially visible */}
      <div className="spacer h-32 bg-transparent"></div>

      <div className="museum-section mt-16">
        <MuseumSection
          image={muzeum}
          title="Technik Museum Sinsheim"
          description="In Sinsheim, eine faszinierende Entdeckung der Technik mit einzigartigen Ausstellungen und historischen Fahrzeugen."
        />
        <MuseumSection
          image={Hermann_Oberth}
          title="Hermann Oberth"
          description="Hermann Oberth: Der Visionär der Raumfahrt. Vor rund 100 Jahren erschien Hermann Oberths Buch 'Rakete zu den Planetenräumen'. Es ist das erste Werk, das auf Grundlagen der Physik beschreibt, wie eine Rakete ins Weltall abgefeuert werden könnte. In Feucht erinnert ein Museum an den Pionier."
        />
      </div>
    </section>
  );
}