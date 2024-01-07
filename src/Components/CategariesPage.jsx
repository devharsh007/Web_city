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
    <div className='borderCategary border flex'>
      <ul className='grid min-w-56 h-fit grid-rows-9'>
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
          <ul className='flex flex-wrap flex-grow'>
            {websitesData[selectedCategory]
              .map((website, index) => (
            <li className='p-2 m-2 border flex flex-wrap gap-10' key={index}>
                <a 
                  href={website.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {website.name}
                  </a>
                  {/* <p>
                    {website.description}
                  </p> */}
                  
            </li>
            ))}
          </ul>
        )}
      </div>
      </div>
  );
}

