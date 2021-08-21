import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import LoaderSpinner from "./Components/Loader";
import Modal from "./Components/Modal";
import Button from './Components/Button';
import { useState , useEffect } from "react";

const KEY = '22869531-b15f4153a2c6549b5b245';
function App (){

  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    if (value === ''){
      return;
    }
    setIsLoading(true);
        setTimeout(() => {
        fetch(`https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}db08&image_type=photo&orientation=horizontal&per_page=12`)
          .then(r => r.json())
          .then(photos => setPhotos(photos.hits))
          .finally(setIsLoading(false))
        }, 1000)
    }, [page , value  ]
     
   )

 const onSubmit = (value) => {
   setValue(value);
  }

 const onClickButton = () => {
   setPage(page + 1);
   setIsLoading(true);
    setTimeout(() => {
      fetch(`https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}db08&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())

        .then(newPhotos => {
          setPhotos( [...photos, ...newPhotos.hits]);
          setIsLoading(false);
        })
        .finally(scrollToTop)
    }, 1000)
  }

 const scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
 const  handleSelectImage = data => {
   setSelectedImage(data);
  }

  const closeModal = () => {
    setSelectedImage(null);
  }
   
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery photos={photos} onSelected={handleSelectImage} />
        {photos.length > 0 && !isLoading && <Button onClick={onClickButton} />}
        {selectedImage && <Modal largeImg={selectedImage.largeImageURL} alt={selectedImage.tags} closeModal={closeModal} />}
        {isLoading && <LoaderSpinner />}
      </>
    );
  }

export default App;
