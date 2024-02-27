


import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const AfrikaPage = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Benzersiz ülkeleri bulmak için müzeleri filtrele
  const countries = new Set(data.allMarkdownRemark.nodes.map(node => node.frontmatter.country));

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Countries in Afrika</h1>
        <div>
          {Array.from(countries).map(country => (
            <button
              key={country}
              onClick={() => handleCountrySelect(country)}
              className="p-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              {country}
            </button>
          ))}
        </div>
        <div className="museums-list mt-6">
          {selectedCountry && (
            <h2 className="text-lg font-semibold mb-4">Museums in {selectedCountry}:</h2>
          )}
          <ul>
            {data.allMarkdownRemark.nodes
              .filter(node => node.frontmatter.country === selectedCountry)
              .map(node => (
                <li key={node.frontmatter.slug}>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.name}</Link>
                </li>
              ))}
          </ul>
          </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MuseumsInAfrika {
    allMarkdownRemark(filter: { frontmatter: { continent: { eq: "Afrika" } } }) {
      nodes {
        id
        frontmatter {
          name
          country
          slug 
          image
        }
      }
    }
  }
`;

export default AfrikaPage;