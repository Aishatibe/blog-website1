import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">News Feeds</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="04/07/2022" title="A wish Come True" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="04/07/2022"
            title="The Power of Python"
          />
          <Article
            imgUrl={blog03}
            date="04/07/2022"
            title="AI and Machine Learning - The Future"
          />
          <Article
            imgUrl={blog04}
            date="04/07/2022"
            title="Javascript and Java"
          />
          <Article
            imgUrl={blog05}
            date="04/07/2022"
            title="Future Trends in Data Analysis"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
