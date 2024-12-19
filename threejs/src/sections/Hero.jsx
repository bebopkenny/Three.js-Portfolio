import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
// import { Leva, useControls } from "leva"; 
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

/**
 * To find out how Leva works and how it was used to position the HackerRoom,
 * please scroll to the bottom of this file for a detailed explanation.
 */


const Hero = () => {
    // Media query to check if the screen width is small (e.g., mobile phones)
    const isSmall = useMediaQuery({ maxWidth: 440 });

    // Media query to check if the screen width is mobile-sized
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Media query to check if the screen width falls within tablet-sized range
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // Function to calculate and adjust sizes for objects based on screen size
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        // Main container section that spans the full screen
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Text content at the top of the section */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                {/* Welcome text with a waving hand emoji */}
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Kenny <span className="waving-hand">👋</span>
                </p>
                {/* Subheading text with a gradient effect */}
                <p className="hero_tag text-gray_gradient">Building Innovative Solutions</p>
            </div>

            {/* 3D Canvas container */}
            <div className="w-full h-full absolute inset-0">
                {/* Three.js canvas rendering 3D content */}
                <Canvas className="w-full h-full">
                    {/* Fallback loader to display while 3D content is loading */}
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Camera setup for rendering the 3D scene */}
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        {/* Custom camera component to enhance interactivity */}
                        <HeroCamera isMobile={isMobile}>
                            {/* Main 3D model (HackerRoom) rendered in the scene */}
                            <HackerRoom 
                                position={sizes.deskPosition} // Dynamically positioned based on screen size
                                rotation={[0, -Math.PI, 0]} // Rotated 180 degrees
                                scale={sizes.deskScale} // Scaled dynamically for different screens
                            />
                        </HeroCamera>

                        {/* Group of additional 3D elements in the scene */}
                        <group>
                            <Target position={sizes.targetPosition} /> {/* Example target object */}
                            <ReactLogo position={sizes.reactLogoPosition} /> {/* React logo in 3D */}
                            <Cube position={sizes.cubePosition} /> {/* Cube object */}
                            <Rings position={sizes.ringPosition} /> {/* Rings object */}
                        </group>

                        {/* Lighting setup for the scene */}
                        <ambientLight intensity={1} /> {/* Ambient light for overall illumination */}
                        <directionalLight position={[10, 10, 10]} intensity={0.5} /> {/* Directional light */}
                    </Suspense>
                </Canvas>
            </div>

            {/* Button at the bottom of the section linking to the contact section */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    {/* Button component with a beam animation */}
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;

/**
 * Leva is a lightweight GUI for controlling parameters in a React application.
 * It allows developers to add interactive sliders, toggles, color pickers, and more.
 * In this code, Leva was originally used to dynamically control the position, rotation, and scale of the `HackerRoom` component.
 * 
 * Example:
 * The `useControls` hook allows you to define interactive sliders for:
 * - `positionX`, `positionY`, `positionZ`: Control the X, Y, Z coordinates of the HackerRoom.
 * - `rotationX`, `rotationY`, `rotationZ`: Adjust the rotation of the HackerRoom along different axes.
 * - `scale`: Dynamically scale the HackerRoom in the scene.
 *
 * By using these controls, developers can experiment with different values for positioning and orientation
 * directly in the browser, making it easier to fine-tune the 3D model's appearance in the scene.
 * Although it's commented out here, you can uncomment the `useControls` section to enable this functionality.
 */

// const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // });


// Documentation:
// React Three Fiber.docs
// Sketchfab
// Globe github repo https://github.com/vasturiano/globe.gl

// Time Stamp:
// 2:30:00 for changing logo on screen
