import React from "react";
import TeamBox from "../../modules/Home/TeamBox";

const MainPageTeam = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-5 mb-4">Meet Our Advisers</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <TeamBox name="David James" role="Profession" image="img/team-1.jpg" />
          <TeamBox name="David Jones" role="Profession" image="img/team-2.jpg" />
          <TeamBox name="Namino James" role="student" image="img/team-4.jpg" />
          <TeamBox name="Erfan Kazemi" role="student" image="img/team-3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default MainPageTeam;
