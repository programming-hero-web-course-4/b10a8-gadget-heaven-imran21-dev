import { useNavigate, useRouteError } from "react-router-dom";


const ErrorElement = () => {
    const errorM = useRouteError();
    const {status,statusText,error,} = errorM;
    const navigate = useNavigate();
    const errorBtn = () => {
        navigate('/')
    }
    console.log(errorM)
    return (
        <div className="min-h-screen text-center">
           <h1 className="pt-56 text-3xl">{status}</h1>
           <h1>{statusText}</h1>
           <p>{error.message}</p>
          <button onClick={errorBtn} className="btn px-8 bg-pColor rounded-full text-white mt-8">Back to HomePage</button>
        </div>
    );
};

export default ErrorElement;