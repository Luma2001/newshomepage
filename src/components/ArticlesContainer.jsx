import { Article } from "./Article"
import img1 from "../assets/images/image-retro-pcs.jpg"
import img2 from "../assets/images/image-top-laptops.jpg"
import img3 from "../assets/images/image-gaming-growth.jpg"



export const ArticlesContainer = () => {
  return (
    <section  className="mt-6 md:flex overflow-x-scroll md:gap-10 md:flex-wrap place-content-around ">
        <Article 
            img={img1}
            alt="Image of retro pc"
            number="01"
            title=" Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
        />
        <Article 
            img={img2}
            alt="Image of Laptops"
            number="02"
            title="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
        />
        <Article 
            img={img3}
            alt="Image of gaming pc"
            number="03"
            title="The Growth of Gaming"
            text=" How the pandemic has sparked fresh opportunities."
        />
    </section>
  )
}


 
 
  
  
  

 
  
 