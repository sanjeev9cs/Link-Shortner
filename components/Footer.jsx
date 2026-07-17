import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-4">
            <div className="mycontainer flex flex-col md:flex-row justify-between items-center px-4">

                <div className="text-lg font-bold">
                    <span className="text-green-500">&lt;</span>
                    Sanjeev Kumar
                    <span className="text-green-500">/&gt;</span>
                </div>

                <div className="flex gap-6 mt-3 md:mt-0">
                    <a
                        href="https://github.com/sanjeev9cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sanjeev9cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://www.instagram.com/sanjeev9cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://www.youtube.com/@sanjeev9cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        YouTube1
                    </a>

                    <a
                        href="https://www.youtube.com/@technologyengineerall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400"
                    >
                        YouTube2
                    </a>
                </div>
            </div>

            <p className="text-center text-sm mt-4 text-gray-400">
                sanjeev9cs
            </p>
        </footer>
    );
};

export default Footer;