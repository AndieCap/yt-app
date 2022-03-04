import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const[videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const search = async (term) =>
    {

        const result = await youtube.get(
            '', 
            {params: {q:term}
        });
        setVideos(result.data.items);
    };

    return [videos, search];
}

export default useVideos;