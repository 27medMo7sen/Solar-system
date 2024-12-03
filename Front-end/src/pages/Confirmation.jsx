import { useLoaderData } from "react-router-dom";
import { Celebration } from "../components/Forms/Celebration";

export const Confirmation = () => {
    const data= useLoaderData();
    console.log(data);
    if(data.status === 200)
        return <Celebration message={"Congratulations! You have successfully created an account."}/>
     
    return <Celebration message={"your account is already confirmed, login now."}/>

       
    
};
export const loader = async ({ request }) => {
    const token = new URL(request.url).pathname.split("/").pop();;
    console.log(token);
    const res = await fetch( 
       `http://localhost:3000/api/auth/confirm/${token}`,
         {
              method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(res);
    return {message: res.message , status:res.status}; 
}

