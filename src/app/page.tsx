
import React from "react"
import Shoes from "./components/Shoes/page"
import Hero from "./components/Hero"
import Shops from "./components/Shops"
import Latest from "./components/Latest/page"
import UniqueFeatures from "./components/UniqueFeatures/page"
import LatestProduct from "./components/LatestProduct/page"
import TopCategories from "./components/TopCategories/page"
import Discount from "./components/Discount/page"
import { Newspaper } from "./components/Newspaper"
import LatestBlog from "./components/LatestBlog"






const Home = () => {
  return (
    <div>
      <Hero/>
      <Shoes/>
      <Latest/>
      <Shops/>
      <UniqueFeatures/>
      <LatestProduct/>
 <Discount/>
 <TopCategories/>

<Newspaper/>
<LatestBlog/>
    </div>
  )
}
export default Home