import { useState } from 'react';
import { ReactTyped } from "react-typed";
import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('  msizajst@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* Intro */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/code.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />

                        <div>
                            <p className="grid-headtext">Hi, I’m James Matsheni</p>
                            <p className="grid-subtext">
                                # git commit -m "full-stack developer: building dynamic & responsive web apps"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/tech.png"
                            alt="grid-2"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                dev.skills = ["languages", "frameworks", "tools"] <br />
                                dev.goal = "build(robust, scalable_applications)"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Logo + Button */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <img
                                src="assets/logo.png"
                                alt="grid-logo"
                                className="w-full sm:h-[276px] h-fit object-contain"
                            />
                        </div>

                        <div>
                            <Button
                                name="fetch('/about')"
                                isBeam
                                containerClass="w-full mt-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Coffee ASCII Section */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <div className="font-terminal flex items-center justify-center h-full">

                            <img
                                src="assets/coffee-dev.png"
                                alt="Fueled by coffee. Driven by curiosity."
                                className="
                                    w-full
                                    h-full
                                    object-contain
                                    opacity-90
                                    hover:opacity-100
                                    transition-opacity
                                    duration-300
                                "
                            />

                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-white">
                                    msizajst@gmail.com
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
