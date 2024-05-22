import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PropertyList.css';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/properties')
            .then(response => {
                setProperties(response.data);
                console.log('Properties fetched successfully!', response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the properties!', error);
            });
    }, []);

    return (
        <div className="property-list">
            <h1>Property List</h1>
            {properties.length === 0 ? (
                <p>No properties available.</p>
            ) : (
                <ul>
                    {properties.map(property => (
                        <li key={property._id} className="property-item">
                            <h2>{property.title}</h2>
                            <p>{property.description}</p>
                            <p>Location: {property.location}</p>
                            <p>Bedrooms: {property.bedrooms}</p>
                            <p>Bathrooms: {property.bathrooms}</p>
                            <p>Rent: ${property.rent}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PropertyList;
