import { useEffect } from "react";






const Statistics = () => {
    useEffect(()=>{
            document.title = 'Statistics | Gadget Heaven'
        },[])
      
  
    return (
        <div className="min-h-screen">
            Statistics
        </div>
    );
};

export default Statistics;