
import Header from "../../Components/Header/Header"
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../Components/Food Display/FoodDisplay"
import AppDownload from "../../Components/App Download/AppDownload"

import "./Home.css"
import { useState } from "react"


export default function Home()
{
    const [category, setCategory]= useState("All")

    return(
        <>
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
            <AppDownload/>

        </div>
        </>
    )
}