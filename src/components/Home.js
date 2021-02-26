// import React, { Component, useState, useEffect } from "react";
// import fire from "../config/config";
// import "../style/style.css";



// const Home = ({ handleLogout }) => {
//      const [users, setUsers] = useState([]);

//      const fetchUsers = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//         setUsers(await response.json());

//      }

//      useEffect(()=>{
//          fetchUsers();
//      }, [])


//   return (

//     <>
//     <div>
//     <section id="team" className="pb-5">
//     <div className="container">
//         <h5 className="section-title h1">OUR TEAM</h5>
//         <div className="row">

//         {users.map((item)=> {
//             return(
//                 <div className="col-xs-12 col-sm-6 col-md-4">
//                 <div className="image-flip" >
//                     <div className="mainflip flip-0">
//                         <div className="frontside">
//                             <div className="card">
//                                 <div className="card-body text-center">
//                                     <p><img className=" img-fluid" src={item.url} alt="card image" /></p>
//                                     <h4 className="card-title">{item.title}</h4>
//                                     <p className="card-text">This is basic card with image on top, title, description and button.</p>
//                                     <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="backside">
//                             <div className="card">
//                                 <div className="card-body text-center mt-4">
//                                     <h4 className="card-title">Sunlimetech</h4>
//                                     <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
//                                     <ul className="list-inline">
//                                         <li className="list-inline-item">
//                                             <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
//                                                 <i className="fa fa-facebook"></i>
//                                             </a>
//                                         </li>
//                                         <li className="list-inline-item">
//                                             <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
//                                                 <i className="fa fa-twitter"></i>
//                                             </a>
//                                         </li>
//                                         <li className="list-inline-item">
//                                             <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
//                                                 <i className="fa fa-skype"></i>
//                                             </a>
//                                         </li>
//                                         <li className="list-inline-item">
//                                             <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
//                                                 <i className="fa fa-google"></i>
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             )
//         }
//         )}

//             </div>
//             </div>
//             </section>


      
        
//         </div>
    
//     </>

      

//   );
// };

// export default Home;

 




























