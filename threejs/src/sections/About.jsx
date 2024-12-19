import React, { useState } from 'react'; // Importing React and the useState hook
import Globe from 'react-globe.gl'; // Importing the react-globe.gl library for rendering a 3D globe
import Button from '../components/Button'; // Importing a custom Button component

const About = () => {
    // State to track whether the email has been copied
    const [hasCopied, setHasCopied] = useState(false);
    
    // Function to handle copying the email address to the clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText('kennygarcia15@yahoo.com'); // Copy the email to the clipboard
        setHasCopied(true); // Update state to indicate the email was copied

        // Reset the copied state after 2 seconds to allow for subsequent copies
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about"> {/* Main container for the About section */}
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                
                {/* About Me Section */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Display an image */}
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            {/* Title */}
                            <p className="grid-headtext">Welcome, I'm Kenny!</p>
                            {/* Description */}
                            <p className="grid-subtext">
                            As a dedicated learner, I have honed my skills in web development, focusing on interactive 3D websites using cutting-edge tools and technologies.                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Display an image */}
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            {/* Title */}
                            <p className="grid-headtext">Tech Stack</p>
                            {/* Description */}
                            <p className="grid-subtext">
                            I specialize in JavaScript and Python, with growing expertise in React.js and Three.js for creating dynamic and visually engaging projects.                            </p>
                        </div>
                    </div>
                </div>

                {/* Globe Section */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
                            {/* Render a 3D globe with various visual customizations */}
                            <Globe 
                                height={326} 
                                width={326}
                                backgroundColor="rgba(0,0,0,0)" // Transparent background
                                backgroundImageOpacity={0.5} // Semi-transparent background
                                showAtmosphere // Enables atmosphere rendering
                                showGraticules // Displays latitude and longitude lines
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Nighttime globe texture
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // Topographical bump map
                                labelsData={[{
                                    lat: 34, lng: -100, // Latitude and longitude for the label
                                    text: "I'm here!", // Label text
                                    color: 'white', // Label color
                                    size: 20, // Label size
                                }]}
                            />
                        </div>
                        <div>
                            {/* Title */}
                            <p className="grid-headtext">I’m based in Los Angeles, California, and I’m eager to collaborate on innovative projects.</p>
                            {/* Description */}
                            <p className="grid-subtext">
                                I'm based in the United States, with remote work available.
                            </p>
                            {/* Button for contact */}
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Passion for Coding Section */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        {/* Display an image */}
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            {/* Title */}
                            <p className="grid-headtext">My passion for Coding</p>
                            {/* Description */}
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Coding isn't just my profession; it is my passion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        {/* Display an image */}
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            {/* Title */}
                            <p className="grid-subtext text-center">Contact me</p>
                            {/* Email Copy Button */}
                            <div className="copy-container" onClick={handleCopy}>
                                {/* Show a tick icon if email is copied, otherwise show a copy icon */}
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                {/* Display the email address */}
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    kennygarcia15@yahoo.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;