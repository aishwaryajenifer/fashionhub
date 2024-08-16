import React, { useState } from 'react';
import './VeinTest.css'; // Import the CSS file for styling

const VeinTest = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // You can also add code here to handle the actual subscription logic, such as sending form data to a server.
    };

    return (
        <div className="vein-test-container">
            {/* Full-page Image at the top */}
            <div className="image-container">
                <img src='../assets/img/Handweb.jpg' alt="Vein Test" className="vein-test-image" />
            </div>
            <br></br>
            <br></br>
            {/* Existing Vein Test Content */}
            <div className="vein-test-header">
                <h1>The Vein Test</h1>
                <p>
                    Knowing how to find skin tone is a good way of working out which colors suit you - 
                    or the model you will be working with.
                </p>
                <p>
                    Different skin tones (not types) are classed as Cool, Warm, or Neutral.
                    The simplest test you can do is to look at the color of the model's veins at the wrist.
                </p>
            </div>
            <div className="vein-test-details">
                <div className="vein-test-category">
                    <h2>Cool</h2>
                    <p>Blue colored veins - Cool tones</p>
                    <ul>
                        <li>Blue / Purple veins - Cool tones</li>
                    </ul>
                </div>
                <div className="vein-test-category">
                    <h2>Warm</h2>
                    <p>Green colored veins - Warm tones</p>
                    <ul>
                        <li>Green / Olive veins - Warm tones</li>
                    </ul>
                </div>
                <div className="vein-test-category">
                    <h2>Neutral</h2>
                    <p>A combination of the above</p>
                    <ul>
                        <li>Blue / Green veins - Neutral tones</li>
                        <li>Blue / Purple veins - Neutral tones</li>
                    </ul>
                </div>
            </div>
            <div className="vein-test-colors">
                <div className="color-section">
                    <h3>Cool</h3>
                    <div className="color-box cool-blue">Blue - Cool</div>
                    <div className="color-box cool-purple">Blue / Purple - Cool</div>
                </div>
                <div className="color-section">
                    <h3>Warm</h3>
                    <div className="color-box warm-green">Green - Warm</div>
                    <div className="color-box warm-olive">Green / Olive - Warm</div>
                </div>
                <div className="color-section">
                    <h3>Neutral</h3>
                    <div className="color-box neutral-blue-green">Blue / Green - Neutral</div>
                    <div className="color-box neutral-blue-purple-olive">Blue / Purple / Olive - Neutral</div>
                </div>
            </div>

            {/* New Section: How does knowing if you are Cool, Warm or Neutral help you? */}
            <div className="help-section">
                <h2>How does knowing if you are Cool, Warm or Neutral help you?</h2>
                <p>IT IS ALL DOWN TO COLOUR CHOICES</p>
                <p>Cool tones - Clear hues, dark & light colours, ice colours, blue pinks, blue reds.</p>
                <p>Warm tones - Warm hues, orange reds, pink oranges, creams.</p>
                <p>Neutral - Almost any colour suits this skin tone.</p>

                <div className="seasons-section">
                    <img src="path-to-the-seasons-image.jpg" alt="The Seasons" className="seasons-image" /> {/* Replace with the actual path to the seasons image */}
                </div>

                <p>To gain access to the <strong>FREE PDF</strong> download of <strong>THE SEASONS</strong> subscribe below.</p>

                {!isSubmitted ? (
                    <div className="subscribe-section">
                        <h3>SUBSCRIBE</h3>
                        <p>Sign up with your email address to receive the PDF Download to THE SEASONS</p>
                        <form className="subscribe-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                required 
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                required 
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <button type="submit">SIGN UP</button>
                        </form>
                    </div>
                ) : (
                    <div className="pdf-link">
                        <p>Thank you for subscribing! Click the link below to download your PDF:</p>
                        <a href="/season.pdf" download>Download THE SEASONS PDF</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VeinTest;
