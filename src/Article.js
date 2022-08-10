import React, { useState, useEffect } from "react"
function Article_new() {
    const [articl, setarticl] = useState([]);
    useEffect(() => {
        fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10").then((result) => {
            result.json().then((response) => {
                console.log(response)
                setarticl(response)
            })
        })
    }, [])
    return (
        <div className="App">
            <div className="navbar">Article</div>
            <h1 className="text-center heading">India Top Article News</h1>
            <hr></hr>
            {articl.map((index) => {
                return (
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="card card1 col-sm-12 d-flex flex-row">
                                    <div className="card col-lg-7">
                                        <img className="" src={index.jetpack_featured_media_url}></img><br></br>
                                    </div>
                                    <div className="card informaition col-sm-5">
                                        <div className="col-sm-12">
                                            <p className="Date">Date:{index.date}</p>
                                            <p className="Title"> Title:{index.title.rendered}</p>
                                            <p className="Ather">Athor-Name:{index.parsely.meta.author[0].name}</p>
                                            <p className="excerpt">{index.parsely.meta.excerpt}</p>
                                            <p className="publisher">publisher: {index.parsely. meta.publisher.name}</p>
                                            <p className="featured_media">Featured_media:{index.featured_media}</p>
                                            <p dangerouslySetInnerHTML={{ __html: index.excerpt.rendered }}></p>
                                            <a className="Link_Article1" href={index.guid.rendered}>guid</a>
                                            <a className="Link_Article1" href={index.link}>Learn more informmation</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default Article_new;
