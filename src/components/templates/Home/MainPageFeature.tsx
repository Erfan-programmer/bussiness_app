 
import FeatureBox from "../../modules/Home/FeatureBox";

const MainPageFeature = () => {
  return (
    <div className="container-fluid feature pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px;" }}
        >
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-5 mb-4">
            Connecting businesses, ideas, and people for greater impact.
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <FeatureBox
            title="Global Management"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...`}
            icon="fas fa-chart-line"
          />
          <FeatureBox
            title="Corporate Banking"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...`}
            icon="fas fa-university"
          />
          <FeatureBox
            title="Asset Management"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...`}
            icon="fas fa-file-alt"
          />
          <FeatureBox
            title="Investment Bank"
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...`}
            icon="fas fa-hand-holding-usd"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageFeature;
