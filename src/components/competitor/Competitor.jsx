import styles from './competitor.module.scss';
import { MdHowToVote } from "react-icons/md";
import { handleModale } from '../../features/modal/modalSlice';
import { setCurrentCompetitor } from '../../features/competitors/competitorsSlice';
import { useDispatch} from 'react-redux';
const Competitor = ({competitor}) => {
  const dispatch = useDispatch();
  const voteNow=()=>{
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModale());
  }
    const backgroundStyle ={
        width:"100%",
        background:`linear-gradient(0deg,#128b4871,rgba(0,0,0,0)
        60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
        backgroundSize:"cover",
        backroundRepeat:"no-repeat",
    }
  return (
    <div className={styles.competitor}style={backgroundStyle}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName+" "+competitor.LastName}</span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}>Total Votes: {competitor.NumberofVotes}</span>
        </div>
        <div className={styles.vote} onClick={voteNow}>
        <MdHowToVote className={styles.vote_icon} />
        </div>
      
    </div>
  )
}

export default Competitor
