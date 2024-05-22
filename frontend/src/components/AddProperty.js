import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProperty.css';

const predefinedProperties = [
    {
        title: 'Beautiful Apartment in the City Center',
        description: 'A spacious and modern apartment located in the heart of the city.',
        location: 'Downtown',
        bedrooms: 3,
        bathrooms: 2,
        rent: 2500,
    },
    {
        title: 'Cozy Cottage Near the Beach',
        description: 'A charming cottage just a short walk from the beach.',
        location: 'Beachside',
        bedrooms: 2,
        bathrooms: 1,
        rent: 1800,
    },
    {
        title: 'Modern Condo with City Views',
        description: 'A luxurious condo with stunning views of the city skyline.',
        location: 'Uptown',
        bedrooms: 2,
        bathrooms: 2,
        rent: 3200,
    },
    {
        title: 'Spacious Family Home in Suburbs',
        description: 'A large family home with a big backyard in a quiet neighborhood.',
        location: 'Suburbs',
        bedrooms: 4,
        bathrooms: 3,
        rent: 2700,
    },
    {
        title: 'Luxurious Villa with Private Pool',
        description: 'An exclusive villa featuring a private pool and garden.',
        location: 'Countryside',
        bedrooms: 5,
        bathrooms: 4,
        rent: 4500,
    },
    {
        title: 'Compact Studio in the Business District',
        description: 'A modern studio apartment located in the bustling business district.',
        location: 'Business District',
        bedrooms: 1,
        bathrooms: 1,
        rent: 2000,
    }
];

const AddProperty = ({ token }) => {
    const [selectedProperty, setSelectedProperty] = useState(predefinedProperties[0]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedProperty({
            ...selectedProperty,
            [name]: value,
        });
    };

    const handlePredefinedChange = (e) => {
        const property = predefinedProperties[e.target.value];
        setSelectedProperty(property);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/properties', selectedProperty, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                console.log('Property added!', response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error('There was an error adding the property!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>Select Predefined Property:</label>
                <select onChange={handlePredefinedChange}>
                    {predefinedProperties.map((property, index) => (
                        <option key={index} value={index}>
                            {property.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={selectedProperty.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={selectedProperty.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={selectedProperty.location} onChange={handleChange} required />
            </div>
            <div>
                <label>Bedrooms:</label>
                <input type="number" name="bedrooms" value={selectedProperty.bedrooms} onChange={handleChange} required />
            </div>
            <div>
                <label>Bathrooms:</label>
                <input type="number" name="bathrooms" value={selectedProperty.bathrooms} onChange={handleChange} required />
            </div>
            <div>
                <label>Rent:</label>
                <input type="number" name="rent" value={selectedProperty.rent} onChange={handleChange} required />
            </div>
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddProperty;
