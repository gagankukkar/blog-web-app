import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Post() { 
  let { postId } = useParams();
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/blog/post/${postId}`);
      const json = await response.json();
      setPost(json);
    }
    fetchData();
  }, [postId]);

  return (
    <section className="post-area">
      <div className="container">
        <div className="">
          {post &&
            <div className="main-post">
              <div className="post-top-area">
                <h5 className="pre-title">{post.description}</h5>
                <h3 className="title">
                  <b>{post.title}</b>
                </h3>
                <p className="para">
                  Written by: {post.author}<br />
                  Date: {post.date_posted}
                </p>
                <p className="para">
                  {post.body}<br />
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
}
export default Post;