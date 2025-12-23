import { useEffect, useState } from 'react';
import { fetchImages } from './api/unsplash-api';

import SearchBox from './components/SearchBar/SearchBox.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import Loader from './components/Loader/Loader.jsx';
import toast from 'react-hot-toast';

export default function App() {
    const [images, setImages] = useState([]);
    const [loader, setLoader] = useState(false);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    // we no longer use an error fallback UI; prefer toast notifications for async failures
    // and keep the UI functional
    const [error] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSearch = async (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
        setLoader(true);
        setError(false);
        setErrorMessage('');
    };

    useEffect(() => {
        if (query === '') return;

        const loadImages = async () => {
            try {
                setLoader(true);

                // Removed error handling state updates

                const data = await fetchImages(query, page);
                setImages((prevImages) => [...prevImages, ...data.results]);
            } catch (err) {
                console.error('fetchImages failed:', err);
                toast.error('Could not load images. Please try again.');
            } finally {
                setLoader(false);
            }
        };

        loadImages();
    }, [query, page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <div>
            <SearchBox onSubmit={handleSearch} />

                    {/* prefer to show the gallery when possible; errors will show toast notifications */}
                    {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}

            {loader && <Loader />}

            {images.length > 0 && !loader && !error && (
                <LoadMoreBtn onClick={handleLoadMore} />
            )}

            <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={selectedImage} />
        </div>
    );
}