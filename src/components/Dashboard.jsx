import React, { useEffect, useState } from 'react';
import image from '../assets/breaking-news.jpg'

function Dashboard({ country, countryName, category, page }) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                let response = await fetch(url);
                console.log(articles.urlToImage);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                // let result = data.totalResults;
                setArticles(data.articles);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchArticles();
    }, [country, countryName, category , page]); // Include countryName in the dependency array

    return (
        <div className="bg-gray-100 min-h-screen p-4">
    <h2 className='text-3xl font-bold text-center mb-6'>
        <span className="bg-red-900 text-white px-4 py-2 rounded-md">{countryName} News</span>
    </h2>
    {/* <h4>Total Results: {totalResults}</h4> */}
    {error && <p className="text-red-500 text-center">{error}</p>}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((news, index) => {
            const startIndex = 6 * (page - 1);
            // console.log(news.urlToImage);
            const endIndex = 6 * page;
            if (index >= startIndex && index < endIndex) {
                return (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={news.urlToImage?news.urlToImage: image } alt={news.title || 'News Image'} />
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-semibold text-gray-900">{news.title}</h5>
                            <p className="mb-3 text-gray-700">{news.description}</p>
                            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Read more
                            </a>
                        </div>
                    </div>
                );
            }
            return null;
        })}
    </div>
</div>




    );
}

export default Dashboard;
