import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";




// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
    const [data, setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    
    useEffect(()=> {
        const fetchData = async ()=>{
            try {
                const response = await fetch("https://ufuon-store.vercel.app/api/sections/public/");
                if(!response.ok) throw new Error ('failed to fetch data');
                const data = await response.json();
                setData(data.data);
                setLoading(false);
            
              
                
            }catch(err){
                setError(err.message);
                setLoading(false);
            }finally{
                setLoading(false);}
        }
        fetchData()
     
    }, [] )


 




  return (
   <DataContext.Provider value={{data, loading, error}}>
    {children}
   </DataContext.Provider>
  )
}
