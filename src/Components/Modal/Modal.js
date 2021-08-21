import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import s from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

function Modal ({closeModal , largeImg, alt}){
    // componentDidMount() {
    //     window.addEventListener("keydown", handleKeyDown);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("keydown", handleKeyDown);
    // }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
        
    })

   const handleKeyDown = (e) => {
       if (e.code === "Escape") {
           closeModal();
        }
    };

   const handleClickOnBackdrop = (e) => {
        if (e.target === e.currentTarget) {
           closeModal();
        }
    };
   
        return createPortal(
            <div className={s.Overlay} onClick={handleClickOnBackdrop}>
                <div className={s.Modal}>
                    <img src={largeImg} alt={alt} />
                </div>
            </div>,
            modalRoot

        )
    }

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string,
    closeModal: PropTypes.func.isRequired
}
export default Modal;