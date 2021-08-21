import PropTypes from "prop-types";
import s from './ImageGalleryItem.module.css';
function ImageGalleryItem({ id, tags, webformatURL, onClick }) {
    return (
        <>
            <li className={s.ImageGalleryItem} onClick={onClick} data-id={id}>
                <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
            </li>

        </>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    tags: PropTypes.string,
    webformatURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default ImageGalleryItem;