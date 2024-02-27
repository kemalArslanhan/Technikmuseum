import React, { useState } from 'react';
import { graphql, useStaticQuery , Link} from 'gatsby';
import WorldMap from '../images/world.inline.svg';
import Layout from '../components/layout';

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              continent
              country
              image
              url
              slug
            }
            html
          }
        }
      }
    }
  `);

  const handleMapClick = (event) => {
    const countryId = event.target.id;
    const countryName = event.target.getAttribute('name');
    if (countryId) {
      setSelectedCountry(countryName || countryId);
    }
  };

  const museums = selectedCountry
    ? data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.country === selectedCountry)
    : [];

  return (
    <Layout>
    <div className="map-container">
      <WorldMap onClick={handleMapClick} />
    </div>
    {selectedCountry && (
      <div>
        <h2>Museen in {selectedCountry}</h2>
        <ul>
          {museums.map(({ node }) => (
            <li key={node.frontmatter.slug}>
              
              {/* Instead of using dangerousSetInnerHTML, link to the museum detail page */}
              <Link to={node.frontmatter.slug}>{node.frontmatter.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </Layout>
  );
};

export default InteractiveMap;