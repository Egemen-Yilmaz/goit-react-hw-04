import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (searchQuery, page = 1) => {
    // Use the same env var name as in your .env: VITE_UNSPLASH_ACCESS_KEY
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    if (!accessKey) {
        throw new Error(
            'VITE_UNSPLASH_ACCESS_KEY is not defined. Add it to your .env file.'
        );
    }

    // Prefer sending the Client-ID in the Authorization header per Unsplash docs
    const response = await axios.get('/search/photos', {
        params: {
            query: searchQuery,
            page,
            per_page: 12,
        },
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
    });

    return response.data;
};