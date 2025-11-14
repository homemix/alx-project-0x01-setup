import React from "react";
import Header from "@/components/layout/Header";

const IndexPage : React.FC = ()=>{
    return(
        <div className="flex justify-center items-center h-screen">
            <Header/>
            <h1 className="text-7xl font-thin">Welcome IndexPage Page</h1>
        </div>
    )

}
export default IndexPage;