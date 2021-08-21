import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes, { object } from "prop-types";
import s from './ImageGallery.module.css';

function ImageGallery({ photos, onSelected }) {
    return (
        <ul className={s.ImageGallery}>
            {photos.map(photo => <ImageGalleryItem key={photo.id}
                id={photo.id}
                tags={photo.tags}
                webformatURL={photo.webformatURL}
                onClick={() => onSelected(photo)} />)}
        </ul>

    )
}

ImageGalleryItem.propTypes = {
    photos: PropTypes.arrayOf(object),
    onSelected: PropTypes.func
}
export default ImageGallery;