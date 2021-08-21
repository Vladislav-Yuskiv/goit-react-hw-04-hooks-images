import PropTypes from "prop-types";
import s from './Button.module.css';
function Button({ onClick }) {
    return (
        <div className={s.container}>
            <button type="button" onClick={onClick} className={s.Button}>
                Load More
            </button>
        </div>
    )
}
Button.propTypes = {
    onClick: PropTypes.func
}
export default Button;