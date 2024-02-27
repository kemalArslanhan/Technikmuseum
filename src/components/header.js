import React, { useEffect, useState } from 'react';
import { Link, navigate, useStaticQuery, graphql } from "gatsby";
import "../styles/tailwind.css";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';




function Header  () {

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            slug
          }
        }
      }
    }
  }
`);

  const museumNames = allMarkdownRemark.edges.map(edge => edge.node.frontmatter.name);

  //const { i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Dropdown'ı open/closed
  function toggleDropdown ()  {
      setDropdownOpen(function(prevIsOpen) 
      { return !prevIsOpen });
  };

  // Menu'yu aç/kapa
  function toggleMenu ()  { 
    setMenuOpen(function(isMenuOpen){
      return !isMenuOpen });
    };

  const filterMuseums = (query) => {
    setSearchResults(allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.name.toLowerCase().includes(query.toLowerCase()))
      .map(edge => ({
        name: edge.node.frontmatter.name,
        slug: edge.node.frontmatter.slug, // Slug değeri burada alınıyor.
      }))
    );
  };



  useEffect(() => {
    if (searchQuery.trim()) {
      filterMuseums(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);


  useEffect(() => {
    console.log("isDropdownOpen değeri:", isDropdownOpen);
    console.log("isMenuOpen değeri:", isMenuOpen);
    console.log("toggleDropdown fonksiyonu:", toggleDropdown);
    console.log("toggleMenu fonksiyonu:", toggleMenu);

    const handleClickOutside = (event) => {

      
      if (isMenuOpen && !event.target.closest('.menu, .menu-trigger')) {
        setMenuOpen(false);
      }
    }

  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen]);





  return (
    <nav className='bg-gray-800 text-white text-lg'>
      <div className='container mx-auto flex items-center justify-between p-4'>

        {/* Logo */}
        <div className='flex items-center mt-5 '>
          <Link to="/" className='flex items-center'>
            <img src={logo} alt='Technisches Museum' className='h-12 w-12  md:h-20 md:w-36' />
          </Link>
        </div>

        {/* Burger Menü  */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>

        {/* Navigasyon Menü */}
        <div className={`absolute md:relative inset-x-0 md:inset-x-auto top-20 md:top-0 w-full  bg-gray-800 md:bg-transparent z-40 transition-all ease-out duration-300 ${isMenuOpen ? 'flex' : 'hidden md:flex'} flex-col md:flex-row items-center justify-center md:justify-between mt-6`}>
          <ul className='flex flex-col md:flex-row w-full md:w-auto items-center md:items-center justify-center'>
            <li className='text-center w-40 hover:bg-slate-200'><Link to="/" className='block px-4 py-2 hover:text-gray-200'>Home</Link></li>
            <li className='relative text-center w-full hover:bg-slate-200'>
              <span onClick={toggleDropdown} className=' px-4 py-2 hover:text-gray-300 cursor-pointer w-40'>Kontinenten</span>
              {isDropdownOpen && (
                <ul className='w-full right-3 left lg:left-0.5 absolute bg-gray-800 mt-5 '>
                  <li className='ml-3 px-4 py-2 hover:bg-gray-600'>
                    <Link to="/Continent/Europa" className='hover:text-gray-200'>Europa</Link>
                  </li>
                  <li className='ml-3 px-4 py-2 hover:bg-gray-600'>
                    <Link to="/Continent/Afrika" className='hover:text-gray-200'>Afrika</Link>
                  </li>
                  <li className='block ml-3  px-4 py-2 hover:bg-gray-600'>
                    <Link to='/Continent/Asien' className='hover:text-gray-200 '>Asien</Link>
                  </li>
                  <li className='block ml-3  px-4 py-2 hover:bg-gray-600'>Antarktis</li>
                  <li className='block ml-3  px-4 py-2 hover:bg-gray-600'>Australien</li>
                  <li className='block ml-3  px-4 py-2 hover:bg-gray-600'>Nordamerika</li>
                  <li className='block ml-3  px-4 py-2 hover:bg-gray-600'>Südamerika</li>
                </ul>
              )}
            </li>
          </ul>

        </div>
        {/* search */}

        <div className="relative hidden lg:block">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Museum search..."
            className="px-2 py-1 text-black "
          
          />
          {searchQuery && searchResults.length > 0 && (
            <ul className="absolute ml-0 list-none bg-white text-black z-10">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="p-2  hover:bg-gray-300 cursor-pointer"
                  onClick={() => navigate(`${result.slug}`)} // Burada düzeltilmiş URL yapısı
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/*Language Switch Buttons 
            <div className=' ml-4 relative '>
              <img src={"/"} alt='Deutsch' className='px-2 py-2 hover:opacity-50 cursor-pointer' onClick={()=> i18n.changeLanguage('de')}/>
               <div className='absolute inset-0 flex items-center justify-center hover:opacity-100 opacity-0'>
                  <img src={ukFlag} alt="English" className='px-2 py-2 cursor-pointer' onClick={() => i18n.changeLanguage('en')} />
                 </div
          </div>*/}
      </div>

    </nav>
  )
}

export default Header;

