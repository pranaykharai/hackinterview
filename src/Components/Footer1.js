import React from 'react'

export const Footer = () => {
    const footerStyle ={
        position: "relative",
        top : "100vh",

    }
    return (
        <div>
            <footer className="h-56 w-full border border-yellow-500 bg-gray-200" style={footerStyle}>
                <div className="my-10 mx-10">
                    <p>© iria research 2021</p>
                    <p>ALL RIGHTS RESERVED.</p>
                </div>
                <form  method="post"  target="_blank" >
                   
                        <div className="flex ">
                            <label htmlfor="" className="">Email Address</label>
                            <input type="email" placeholder="Enter Email for Updates" />
                        </div>
                   
                </form>
            </footer>
        </div>
    )
}
