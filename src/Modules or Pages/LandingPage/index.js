import Header from "./Header";
import Slider from "./slider";
import FeatureItems from "../../CommonComponents/FeatureItems";
import featureData from "../../constants/featuresData";
function LandingPage() {
  return (
    <div>
      <Header/>
      <Slider />
      {featureData.map((item) => (
        <FeatureItems data={item} />
      ))}
      {/* <FeatureItems></FeatureItems>
      <FeatureItems/>
      <FeatureItems/>
      <FeatureItems/> */}
    </div>
  );
}
export default LandingPage;
