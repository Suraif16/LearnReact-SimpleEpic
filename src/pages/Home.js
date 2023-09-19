import MainBanner from "../components/banners/MainBanner";
import StandardLayout from "../components/layout/StandardLayout";
import StandardContainer from "../components/containers/StandardContainer";
import StandardCarousel from "../components/carousel/StandardCarousel";
import StandardContainerGroup from "../components/containers/StandardContainerGroup";
import LinkGroup from "../links/LinkGroup";

//images
import img1 from '../images/iphone-se.jpg';
import img2 from '../images/iphone.jpg';
import img3 from '../images/ipad.jpg';
import img4 from '../images/airpod.jpg';

const DATA = [
  {
    title: 'iPhone SE',
    description: 'Amazing Experience.',
    image: img1,
    style: "bg-gray-100"
  },
  {
    title: 'iPhone 14',
    description: 'The Ultimate iPhone',
    image: img2,
    style: "bg-gray-200"
  },
  {
    title: 'iPad',
    description: 'Lovable, Drawable, Magical',
    image: img3,
    style: "bg-gray-300"

  },
  {
    title: 'AirPod',
    description: 'Ready, Set, Done',
    image: img4,
    style: "bg-gray-400"
  }
]

const CAROUSEL_DATA = [
  {
    image: img1,
    imageAlt: "iPhone-SE"
  },
  {
    image: img2,
    imageAlt: "iPhone 14"
  },
  {
    image: img3,
    imageAlt: "iPad"
  },
  {
    image: img4,
    imageAlt: "AirPod"
  }
]


function Home() {
  return (
    <div>
        <StandardLayout>
        {/* 1) Main Banner */}
          <MainBanner />

        {/* 2) Box Components */}
          <StandardContainerGroup data={DATA}/>

        {/* 3) Carousel */}
          <StandardCarousel data={CAROUSEL_DATA} />

        {/* 4) Page Content */}
          <div className="bg-gray-400">
          {/* 4.1_ Main Content */}
          <p className="px-[200px] py-5 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien tincidunt nunc, vel bibendum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien tincidunt nunc, vel bibendum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien tincidunt nunc, vel bibendum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien tincidunt nunc, vel bibendum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien tincidunt nunc, vel bibendum
          </p>
          {/* 4.2)Sub Links */}
          <LinkGroup />
          </div>
          {/* 5) Footer */}
        </StandardLayout>

    </div>
  )
}

export default Home
