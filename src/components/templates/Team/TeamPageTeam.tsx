import  { useContext } from "react";
import TeamBox from "../../modules/Home/TeamBox";
import { ContextItem } from "../../../../hooks/Context";
import { TeamType } from "../../../../types/blog";

const TeamPageTeam = () => {
  const { TeamItems } = useContext(ContextItem);
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
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
          {TeamItems?.map((team: TeamType) => (
            <TeamBox key={team._id} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPageTeam;
