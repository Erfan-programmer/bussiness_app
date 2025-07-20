type TeamType = {
    image:string,
    name:string,
    role:string
}
const TeamBox = ({image , name , role}:TeamType) => {
  return (
    <div
    className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
    data-wow-delay="0.8s"
    data-aos="fade-up"
  >
    <div className="team-item">
      <div className="team-img">
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div className="team-title">
        <h4 className="mb-0">{name}</h4>
        <p className="mb-0">{role}</p>
      </div>
      <div className="team-icon">
        <a
          className="btn btn-primary btn-sm-square rounded-circle me-3"
          href=""
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="btn btn-primary btn-sm-square rounded-circle me-3"
          href=""
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="btn btn-primary btn-sm-square rounded-circle me-3"
          href=""
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="btn btn-primary btn-sm-square rounded-circle me-0"
          href=""
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default TeamBox
