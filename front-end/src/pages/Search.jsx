import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom'
import axios from 'axios'

function Search() {
    // const searchText = useParams();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if(queryParam) {
            setQuery(queryParam);
        }
    }, []);
    useEffect(() => {

        if (!query) {
            setResults([]);
            return;
        }
        
        const fetchItems = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('http://localhost:5000/api/items', {
                    params: {q: query}
                });
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally{
                setLoading(false);
            }
        };
        fetchItems();
    }, [query]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-[#1b2629] sm:text-6xl sm:leading-relaxed'>Search</h1>
            <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                    <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
                    <input className="outline-none w-full placeholder:text-[#1b2629]" name="query" type="search" placeholder="Search for your recipe" id="search" required value={query} onChange={handleSearch} />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ul>
                {
                    results && results.map((item) => (
                        <li key={item._id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search