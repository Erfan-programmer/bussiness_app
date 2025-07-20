 
import ServiceBox from "../../modules/Home/serviceBox";

const MainPageService = () => {
  return (
    <div className="container-fluid service pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-5 mb-4">We Services provided best offer</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <ServiceBox
            title={"Strategy Consulting"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt simili officiis veritatis,`}
            image="img/service-1.jpg"
          />
          <ServiceBox
            title={"Financial Advisory"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,`}
            image="img/service-2.jpg"
          />
          <ServiceBox
            title={"Managements"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, sint? Excepturi facilis neque nesciunt similique
                  officiis veritatis,`}
            image="img/service-3.jpg"
          />
          <ServiceBox
            title={"Supply Optimization"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,`}
            image="img/service-4.jpg"
          />
          <ServiceBox
            title={"Hr Consulting"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur, sint? Excepturi facilis neque nesciunt similiqu officiis veritatis,`}
            image="img/service-5.jpg"
          />
          <ServiceBox
            title={" Marketing Consulting"}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,`}
            image="img/service-6.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageService;
