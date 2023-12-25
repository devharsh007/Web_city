import { useState } from 'react';
import { websitesData } from '../data/app-data';

export default function CategoriesPage() {
  // Converting object into array
  const categories = Object.keys(websitesData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCateagyEvent(e) {
    console.log('Category Clicked: ');
    setSelectedCategory( e )
  }
  
  return (
    <div className='border'>
      <ul className='grid grid-cols-9'>
        {categories.map((category, index) => (
          <li
            onClick={() => handleCateagyEvent(category)}
            className='p-2 border-r-8 text-lg border m-2'
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
      
      <div id="websiteList">
        {selectedCategory && (
          <ul>
            {websitesData[selectedCategory]
              .map((website, index) => (
            <li className='p-2 border flex gap-14' key={index}>
                <a className='w-36'
                  href={website.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {website.name}
                  </a>
                  <p>
                    {website.description}
                  </p>
                  
            </li>
            ))}
          </ul>
        )}
      </div>
      </div>
  );
}

