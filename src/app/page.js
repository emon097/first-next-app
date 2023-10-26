import Image from "next/image";
import image1 from "@/assets/1650896.jpg";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Image height={600} width={400} src={image1} alt="lt" />
    </div>
  );
};
export default Home;
