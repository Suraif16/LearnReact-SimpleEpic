import MainBanner from "../components/banners/MainBanner";
import StandardLayout from "../components/layout/StandardLayout";
import StandardContainer from "../components/containers/StandardContainer";

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

function Home() {
  return (
    <div>
        <StandardLayout>
          <MainBanner />
          <div className="grid grid-cols-2">
            {DATA.map(item => (<StandardContainer title={item.title} description={item.description} image={item.image} style={item.style} />))}
          </div>

        </StandardLayout>

    </div>
  )
}

export default Home
