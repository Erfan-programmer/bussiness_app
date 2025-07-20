 
import { useForm } from "react-hook-form";

import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
const ContactForms = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("http://localhost:3500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        swal({
          title: "You added to our family successfully!",
          icon: "success",
        });
        reset()
      } else if (res.status === 500) {
        swal({
          title: "There was an internal server error!",
          icon: "error",
          buttons: ["try again"],
        });
      } else {
        const errorData = await res.json();
        swal({
          title: `Error: ${errorData.message || res.statusText}`,
          icon: "error",
        });
      }
    } catch (error:any) {
        swal({
            title: `Error: ${error.message || "Error "}`,
            icon: "error",
          });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-4">
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0"
                id="name"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              <label htmlFor="name">Your Name</label>
              {errors.name && (
                <span className="text-danger">Name is required</span>
              )}
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control border-0"
                id="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              <label htmlFor="email">Your Email</label>
              {errors.email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control border-0"
                id="phone"
                placeholder="Your Phone"
                {...register("phone", { required: true })}
              />
              <label htmlFor="phone">Your Phone</label>
              {errors.phone && (
                <span className="text-danger">Phone is required</span>
              )}
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0"
                id="project"
                placeholder="Your Project"
                {...register("project", { required: true })}
              />
              <label htmlFor="project">Your Project</label>
              {errors.project && (
                <span className="text-danger">Project is required</span>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0"
                id="subject"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              <label htmlFor="subject">Subject</label>
              {errors.subject && (
                <span className="text-danger">Subject is required</span>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control border-0"
                placeholder="Leave a message here"
                id="message"
                style={{ height: "160px" }}
                {...register("message", { required: true })}
              ></textarea>
              <label htmlFor="message">Message</label>
              {errors.message && (
                <span className="text-danger">Message is required</span>
              )}
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForms;
