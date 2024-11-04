

const NotFound = () => {
    return (
        <div className="absolute w-full bg-pColor/10 h-[470px] rounded-xl flex justify-center items-center gap-2">
            <h1 className="text-xl font-bold">Unavailable!</h1>
            <p>Current items are not available right now</p>
        </div>
    );
};

export default NotFound;