import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        if(parsedData.articles && parsedData.totalArticles) {
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalArticles)
            setLoading(false)
        } else {
            console.error('API Error:', parsedData)
            setLoading(false)
        }
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - BuzzFeedly`;
        setHasMoreArticles(true); // Reset hasMoreArticles when component mounts or category changes
        setPage(1); // Reset page number when category changes
        updateNews(); 
        // eslint-disable-next-line
    }, [props.category])


    const [hasMoreArticles, setHasMoreArticles] = useState(true);

    const fetchMoreData = async () => {   
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}`
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        
        // Check if we received any new articles
        if(parsedData.articles && parsedData.articles.length > 0) {
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalArticles)
        } else {
            // No more articles available
            setHasMoreArticles(false)
        }
      };
 
        return (
            <>
                <div className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                    <h1 className="mb-0">BuzzFeedly</h1>
                    <h2>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={hasMoreArticles && articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News