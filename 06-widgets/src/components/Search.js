import React, { useState, useEffect } from "react";
import wiki from "../apis/wiki";

const Search = () => {
  /** UNDERSTAND WHY WE NEED TO CREATE 2 SEPARATE PIECES OF DATA: 'term' and 'debouncedTerm'
   * 1) useEffect() for 'debouncedTerm' runs
   * 2) User types sth:
        * Immediately update 'term'
        * Set a timer to update 'debouncedTerm'
        
        If the time in which user types for searching is less than 500ms:
        * 'term' updated -> rerender -> cancel previous timer
        * Immediately update 'term'
   * 3) User stops typing for 500ms:
        * 'debouncedTerm' updated 
            * -> state causes rerender(because of 'debouncedTerm' changing) -> data fetched
   */
  /** -> TO AVOID THE REQUEST AS MUCH AS POSSIBLE EACH TIME WE TYPE ON INPUT */

  /** 1) */
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDeboundedTerm] = useState("programming");
  const [items, setItems] = useState([]);

  /** Handling event: onSubmit and onChange */
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onSearchInput = (e) => {
    setTerm(e.target.value);
  };

  /** 2) */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDeboundedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  /** 3) */
  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await wiki.get("", {
        params: {
          srsearch: debouncedTerm,
        },
      });

      setItems(data.query.search);
    };

    try {
      if (debouncedTerm) searchWiki();
    } catch (err) {
      console.log(err);
    }
  }, [debouncedTerm]);

  /** Rendered list to show on screen (return it below) */
  const renderedItems = items.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="content">
          <div className="header">{item.title}</div>
          <div>
            <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
          </div>
        </div>

        <div className="content">
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui right floated button primary content"
            target="__blank"
          >
            Go
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form
        className="ui form"
        onSubmit={onFormSubmit}
        style={{ margin: "20px 0px" }}
      >
        <div className="field">
          <label htmlFor="searchBar">Search</label>
          <input
            className="input"
            value={term}
            type="text"
            placeholder="search..."
            id="searchBar"
            onChange={onSearchInput}
          />
        </div>
      </form>

      <div className="ui divided items">{renderedItems}</div>
    </div>
  );
};

export default Search;
