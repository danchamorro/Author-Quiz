import React from "react";
import Book from "./Book";

const Turn = ({ author }) => {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="Author" className="authorimage" />
      </div>
      <div className="col-6">
        {author.books.map(title => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

export default Turn;
