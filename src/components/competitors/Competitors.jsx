import styles from "./competitors.module.scss";
// import competitors from "../../assets/competitors.json"
import Competitor from "../competitor/Competitor";
import { useSelector } from "react-redux";

const Competitors = () => {
    const {competitors}=useSelector((store)=>store.competitor)
  return (
    <div className={styles.competitors_container}>
        <div className={styles.competitors_header}>
            <span>MissSomali</span>
            <p>
                Built with React.js - the template is a well-structured, thoughtfully
                componentized Next.js project, giving you a codebase that`s productive 
                and enjoyable to work in.
            </p>
        </div>
        <div className={styles.Competitors}>
            {competitors.map((competitor)=>(
                // <span key={competitor.Id}>{competitor.FirstName}</span>
                <Competitor key={competitor.Id} competitor={competitor}/>
            ))}
        </div>
      
    </div>
  )
}

export default Competitors
