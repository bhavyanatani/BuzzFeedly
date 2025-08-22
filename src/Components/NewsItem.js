import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ border: '1px solid #333', borderRadius: '10px' }}>
                
                {/* Badge in top-right corner */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>

                {/* News Image */}
                <img
                    src={!imageUrl
                        ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                        : imageUrl}
                    className="card-img-top"
                    alt="News thumbnail"
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" }}
                />

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ height: '50px', overflow: 'hidden' }}>
                        {title}
                    </h5>
                    <p className="card-text" style={{ height: '80px', overflow: 'hidden' }}>
                        {description ? description.substring(0, 100) + (description.length > 100 ? '...' : '') : ''}
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            Published on {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark mt-auto">
                        Read More
                    </a>
                </div>

            </div>
        </div>
    )
}

export default NewsItem
