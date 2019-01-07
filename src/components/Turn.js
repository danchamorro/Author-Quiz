import React from "react";

const Turn = ({ author }) => {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="Author" className="authorimage" />
      </div>
      <div className="col-6">
        {author.books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default Turn;
