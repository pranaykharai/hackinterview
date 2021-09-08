import React from 'react'
import './css/Main.css'
import {
    Link

} from "react-router-dom";

export const Footer = () => {
    return (
        <>
             <footer className="grid w-full mt-22 h-full bg-gray-200 md:grid-cols-3 justify-items-center">
                <div className="items-center mt-8 bg-gray-200 border-black-500 justify-items-center">

                    <Link to="#"><p className="my-2 text-xl text-left sans-serif hover:text-red-500" ><i class="fas fa-arrow-alt-circle-right hover:text-red-500"></i> Training</p></Link>
                    <Link to="#"><p className="my-2 text-xl text-left sans-serif hover:text-red-500"  ><i class="fas fa-arrow-alt-circle-right hover:text-red-500"></i> Development</p></Link>
                    <Link to="#"><p className="my-2 text-xl text-left sans-serif hover:text-red-500" ><i class="fas fa-arrow-alt-circle-right hover:text-red-500"></i> Integration</p></Link>
                </div>


                <div className="items-center mt-9 justify-items-center">
                    <h1 className="items-center text-xl justify-items-center sans-serif"> <center>  Follow us on</center></h1>
                    <Link to={{ pathname: "https://www.instagram.com/" }} className="mx-3 hover:bg-blue-100" ><i className="transform fab fa-instagram fa-2x hover:hw hover:scale-150 motion-reduce:transform-none"></i></Link>
                    <Link to="https://www.instagram.com/" className="mx-3 " ><i className="my-10 transform fab fa-facebook fa-2x hw hover:scale-150 motion-reduce:transform-none"></i></Link>
                    <Link to="https://www.instagram.com/" className="mx-3 "><i className="my-10 transform fab fa-twitter fa-2x hover:hw hover:scale-150 motion-reduce:transform-none"></i></Link>
                    <Link to="https://www.instagram.com/" className="mx-3 "><i className="my-10 transform fab fa-github fa-2x hw hover:scale-150 motion-reduce:transform-none"></i></Link>
                </div>

                <div className="items-center mt-9 md-7 justify-items-center">
                    <p className="text-xl sans-serif">© hackinterview 2021</p>
                    <p className="pb-7">ALL RIGHTS RESERVED.</p>
                </div>



            </footer>
        </>
    );
}
