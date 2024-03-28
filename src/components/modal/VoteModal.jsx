import { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import styles from './voteModal.module.scss';
import { useSelector,useDispatch } from 'react-redux';
import { handleModale } from '../../features/modal/modalSlice';
import { addVote, decreaseVote, increaseVote, resetState } from '../../features/competitors/competitorsSlice';
Modal.setAppElement('#root');
const VoteModal = () => {
    const dispatch=useDispatch();
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }
      };
  const {isopen}=useSelector((store) => store.modal)
  const {currentCompetitor,voteCount}=useSelector((store)=>store.competitor)
  // console.log(currentCompetitor)
  if(!currentCompetitor) return;


    
      const backgroundStyle ={
        width:"100%",
        background:`linear-gradient(0deg,#128b4871,rgba(0,0,0,0)
        60%,rgba(0,0,0,0)),url("${currentCompetitor.Photo}")`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        borderBottomRightRadius:"10px"
    }
    
      function closeModal() {
        dispatch(handleModale())
      }
      const handleSubmit=(event) => {
        event.preventDefault();
        dispatch(addVote(currentCompetitor.Id))
        dispatch(resetState());
        closeModal();
      }
  return (
    <div>
      {/* <button onClick={()=>dispatch(handleModale())}>Open Modal</button> */}
      <Modal
        isOpen={isopen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.model_container}>
            <div className={styles.competitor_info}>
                <div style={backgroundStyle}></div>
                <div className={styles.bio}>
                    <div className={styles.divider}>
                        <label htmlFor="">Name</label>
                        <span>{currentCompetitor.FirstName +" "+currentCompetitor.LastName }</span>
                    </div>
                    <div className={styles.divider}>
                        <label htmlFor="">state</label>
                        <span>{currentCompetitor && currentCompetitor.RepresentingState }</span>
                    </div> <div className={styles.divider}>
                        <label htmlFor="">background study</label>
                        <span>{currentCompetitor.PersonalBackground }</span>
                    </div>
                    <div className={styles.divider}>
                        <label htmlFor="">employment</label>
                        <span>{currentCompetitor.EmploymentorSchool }</span>
                    </div>

                </div>
            </div>
            <div className={styles.vote_container}>
                <div className={styles.vote_count}>
                    <span>Purchase Votes</span>
                    <div className={styles.vote_controls}>
                        <button type='button' className={styles.icon}
                        onClick={()=>dispatch(increaseVote())}
                        ><AiOutlinePlus className={styles.icon}/></button>
                        <span>{voteCount}</span>
                        <button type='button' className={styles.icon}
                        onClick={()=>dispatch(decreaseVote())}
                        ><AiOutlineMinus className={styles.icon}/></button>

                    </div>
                </div> 
                  <form onSubmit={handleSubmit}>
              <span>Pay with evc,Zaad and sahal</span>
              <input type="number" placeholder='Enter your number' className={styles.form_control} />
              <button type='submit'>Vote Now</button>
            </form>
            </div>
         

        </div>
       
      </Modal>
    </div>
  )
}

export default VoteModal;
