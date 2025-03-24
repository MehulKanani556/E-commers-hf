import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TermsOfServices = () => {
    const [termsData, setTermsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTermsData = async () => {
            try {
                // Get the token from localStorage or wherever you store it
                const token = localStorage.getItem('token');
                
                const response = await axios.get('http://localhost:5000/api/allTerms', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                // Check if the response has the expected structure
                if (response.data && response.data.terms && Array.isArray(response.data.terms)) {
                    setTermsData(response.data.terms);
                } else {
                    console.error('Unexpected API response format:', response.data);
                    setError('Unexpected data format received from the server.');
                }
                
                setLoading(false);
            } catch (err) {
                console.error('Error fetching terms data:', err);
                setError('Failed to load terms of service. Please try again later.');
                setLoading(false);
            }
        };

        fetchTermsData();
    }, []);

    if (loading) {
        return <div>Loading Terms of Service...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    // Filter terms by title
    const termsOfUse = termsData.filter(term => term.title === "Terms Of use");
    const conditions = termsData.filter(term => term.title === "Conditions");

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4'>
                <h2 className='VK_profile_heading mb-4'>
                    Terms of Service
                </h2>
                <div className='VK_Term_of_use'>
                    <div>
                        <p>
                            <b>
                                Terms of Use
                            </b>
                        </p>

                        <div className='mt-3'>
                            <ul className='VK_term_ul'>
                                {termsOfUse.length > 0 ? (
                                    termsOfUse.map((term) => (
                                        <li key={term._id} className='mb-4'>
                                            {term.description}
                                        </li>
                                    ))
                                ) : (
                                    <li className='mb-4'>No terms of use available.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p>
                            <b>
                                Conditions
                            </b>
                        </p>
                        <div className='mt-3'>
                            <ul className='VK_term_ul'>
                                {conditions.length > 0 ? (
                                    conditions.map((condition) => (
                                        <li key={condition._id} className='mb-4'>
                                            {condition.description}
                                        </li>
                                    ))
                                ) : (
                                    <li className='mb-4'>No conditions available.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default TermsOfServices;