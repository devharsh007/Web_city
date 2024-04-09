import { useState, useEffect } from 'react';
import { websitesData } from '../data/app-data';

export default function CategoriesPage() {
  // Converting object into array
  const categories = Object.keys(websitesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [websiteTitles, setWebsiteTitles] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      Promise.all(websitesData[selectedCategory].map(getWebsiteTitle))
        .then(titles => setWebsiteTitles(titles));
    }
  }, [selectedCategory]);

  function handleCategoryEvent(category) {
    console.log('Category Clicked: ', category);
    setSelectedCategory(category);
  }

  function getWebsiteTitle(website) {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const url = CORS_PROXY + website.link;
    return fetch(url, {
      headers: {
      'Origin': window.location.origin, // Include Origin header to mimic same-origin request
    },
    })
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const title = doc.querySelector('title').textContent;
        return title;
      })
      .catch(error => {
        console.error('Error fetching website title:', error);
        return 'Website Title Not Found';
      });
  }

  return (
    <div className="borderCategory border flex">
      <ul className="grid min-w-56 h-fit grid-rows-9">
        {categories.map((category, index) => (
          <li
            onClick={() => handleCategoryEvent(category)}
            className="p-2 border-r-8 text-lg border m-2"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>

      <div id="websiteList">
        {selectedCategory && (
          <ul className="">
            {websitesData[selectedCategory].map((website, index) => (
              <li className="p-2 m-2 border" key={index}>
                <a
                  href={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {websiteTitles[index] || 'Loading...'}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
