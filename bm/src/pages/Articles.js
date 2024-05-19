import React from 'react';

import './Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Impact of Climate Change on Biodiversity",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tincidunt nisi. Nullam quis aliquet risus. Mauris sed felis nec justo facilisis euismod. Ut maximus tortor id felis molestie, vel fermentum enim gravida."
    },
    {
      id: 2,
      title: "The Importance of Renewable Energy Sources",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tincidunt nisi. Nullam quis aliquet risus. Mauris sed felis nec justo facilisis euismod. Ut maximus tortor id felis molestie, vel fermentum enim gravida."
    },
    {
      id: 3,
      title: "Ways to Reduce Plastic Pollution",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tincidunt nisi. Nullam quis aliquet risus. Mauris sed felis nec justo facilisis euismod. Ut maximus tortor id felis molestie, vel fermentum enim gravida."
    }
  ];

  // Pagination
  const articlesPerPage = 3; // Change this number to adjust the number of articles per page
  
  const [currentPage] = React.useState(1);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  

  return (
    <div className="articles">
      <h2>Articles</h2>
      <div className="article-list">
        {currentArticles.map(article => (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Articles;
