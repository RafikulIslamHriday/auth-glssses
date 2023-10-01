import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const SocialLogin = () => {
    const {user, googleLogin} =  useContext(AuthContext)
    const handleSocialLogin = media => {
        media()
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-neutral">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;