import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Components/hook/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useAuth();
   const handleRegister = e => {
     e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;

    // validation password
    if(password.length < 6){
        toast.error("Password should be 6 charecter.")
        return  
    }

     createUser(email, password)
     .then(res=> console.log(res.user))
     .catch(error => console.log(error.message))

     e.target.email.value = ""
     e.target.password.value = ''
     e.target.name.value = ''
   }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleRegister} >
                <div className="form-control ">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="image url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
               <div className="form-control">
               <input type="submit" value="Register" className="btn btn-neutral my-3" />
               </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
                </form>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
