import React from "react";
// import { ReactDOM } from "react";
import iiitd from './iiitd.png';
import './tt.css';
function Nav() {
  return (
    <div>
    <div id="head" style={{marginBottom:"2%"}}>
    <img src={iiitd} alt="iiitd" style={{width: "25%",height: "70px",paddingTop:"10px",marginBottom:"-0.7%"}}/>
    <button id="home">Home</button>
    <input type="text" style={{width: "15%", borderRadius: "10px", border: "10px", marginLeft: "3%", backgroundColor:"white"}}/>
    <button id="search">Search</button>
    </div>
    </div>    
  );
}



// const B=()=>
//     <div>
//         <div style={{flexDirection:"row", display:"flex",marginTop: "2%"}}>
//             <div style={{backgroundColor:"rgb(22, 209, 209)",padding: "10px", width: "15%", borderRadius: "20px", height:"600px"}}>
//                 <div style={{flexDirection: "column", display: "flex", width: "80%", marginLeft:"1%", padding: "3%"}}>
//                     <button style={{marginTop:"2%", backgroundColor: "whitesmoke",border: "1px", borderRadius: "5px"}}>1st Year</button>
//                     <button style={{marginTop:"10%", backgroundColor: "whitesmoke", border: "1px", borderRadius: "5px"}}>2nd Year</button>
//                     <button style={{marginTop: "10%", backgroundColor: "whitesmoke",border: "1px", borderRadius: "5px"}}>Rest</button>
//                 </div>
//             </div>
//             <div style={{marginLeft:"2%", width: "81%"}}>
//                 <table>
//                     <tr style={{border: "1px solid black"}}>
//                       <th style={{textAlign:"center"}}>Day</th>
//                       <th id='a'>8:30-9</th> 
//                       <th>9-9:30</th>
//                       <th>9:30-10</th>
//                       <th>10-10:30</th>
//                       <th>10:30-11</th>
//                       <th>11-11:30</th>
//                       <th>11:30-12</th>
//                       <th>12-12:30</th>
//                       <th>12:30-1</th>
//                       <th>1-1:30</th>
//                       <th>1:30-2</th>
//                       <th>2-2:30</th>
//                       <th>2:30-3</th>
//                       <th>3-3:30</th>
//                       <th>3:30-4</th>
//                       <th>4-4:30</th>
//                       <th>4:30-5</th>
//                       <th>5-5:30</th>
                     
//                     </tr>
//                     <tr>
//                       <td style={{textAlign:"center"}}>Monday</td>
//                       <td></td> 
//                       <td colspan="3" id="k" style={{backgroundColor:"rgb(40,231,82,0.60)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">ML(A)</p>
//                                 <p id="sub">ML(B)</p>
//                                 <p id="sub">QM</p>
//                                 <p id="sub">LST</p>
//                                 <p id="sub">USPP</p>
//                             </div>
//                             <div style={{marginTop:"2%" ,marginLeft: "10%"}}>
//                                 <p id="sub">C101</p>
//                                 <p id="sub">C201</p>
//                                 <p id="sub">C13</p>
//                                 <p id="sub">C24</p>
//                                 <p id="sub">A006</p>
//                             </div>
//                         </div>
                        
//                       </td>
//                       <td colspan="3" style={{backgroundColor:"rgb(249, 249, 46,0.85)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                         <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                             <p id="sub">FOMB</p>
//                             <p id="sub">DMG</p>
//                             <p id="sub">AC</p>
//                             <p id="sub">DCS</p>
//                         </div>
//                         <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                             <p id="sub">C101</p>
//                             <p id="sub">C201</p>
//                             <p id="sub">C13</p>
//                             <p id="sub">C13</p>
//                         </div>
//                         </div>
//                       </td> 
//                       <td colspan="5"></td> 
//                       <td colspan="3" style={{backgroundColor:"rgb(173,250,9,0.60)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">CM</p>
//                                 <p id="sub">DIP(A)</p>
//                                 <p id="sub">DIP(B)</p>
//                                 <p id="sub">AML</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">A006</p>
//                                 <p id="sub">C01</p>
//                                 <p id="sub">C11</p>
//                                 <p id="sub">C03</p>
//                             </div>
//                         </div>
//                       </td> 
                     
                     
                     
//                       <td colspan="3" style={{backgroundColor: "rgb(44,228,240,.50)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">CM</p>
//                                 <p id="sub">DIP(A)</p>
//                                 <p id="sub">DIP(B)</p>
//                                 <p id="sub">AML</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">A006</p>
//                                 <p id="sub">C01</p>
//                                 <p id="sub">C11</p>
//                                 <p id="sub">C03</p>
//                             </div>
//                         </div>
//                       </td> 

//                     </tr>
//                     <tr>
//                       <td style={{textAlign:"center"}}>Tuesday</td>
//                       <td></td> 
//                       <td colspan="3" style={{backgroundColor:"rgba(59, 120, 241, 0.54)" }}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">CGAS</p>
//                                 <p id="sub">CMP</p>
//                                 <p id="sub">IIA</p>
//                                 <p id="sub">OWC</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">C01</p>
//                                 <p id="sub">C02</p>
//                                 <p id="sub">C210</p>
//                                 <p id="sub">C13</p>
//                             </div>
//                         </div>
//                       </td>
//                       <td colspan="3" style={{backgroundColor: "rgb(248,93,6,0.58)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">CBB</p>
//                                 <p id="sub">MAD</p>
//                                 <p id="sub">NS</p>
//                                 <p id="sub">CldC</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">C03</p>
//                                 <p id="sub">C215</p>
//                                 <p id="sub">C21</p>
//                                 <p id="sub">C213</p>
//                             </div>
//                         </div>
//                       </td>
//                       <td colspan="5"></td>
//                       <td colspan="3" style={{backgroundColor: "rgb(255,24,10,0.61)"}}>
//                         <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">MLBA</p>
//                                 <p id="sub">NLP</p>
//                                 <p id="sub">DF</p>
//                                 <p id="sub">DSP</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">C102</p>
//                                 <p id="sub">C01</p>
//                                 <p id="sub">A106</p>
//                                 <p id="sub">A006</p>
//                             </div>
//                         </div>
//                       </td> 
//                       <td colspan="3" style={{backgroundColor: "rgb(246,7,122,0.65)"}}>
//                       <div style={{flexDirection:"row", display: "flex"}}>
//                             <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                 <p id="sub">BioP</p>
//                                 <p id="sub">AAG</p>
//                                 <p id="sub">IRoB</p>
//                                 <p id="sub">AI</p>
//                             </div>
//                             <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                 <p id="sub">C01</p>
//                                 <p id="sub">C11</p>
//                                 <p id="sub">B105</p>
//                                 <p id="sub">C102</p>
//                             </div>
//                         </div>
//                     </td>
                      
                     

//                     </tr>
//                     <tr>
//                         <td style={{textAlign:"center"}}>Wendnesday</td>
//                         <td></td> 
//                         <td colspan="2" style={{backgroundColor:"lightgoldenrodyellow"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%"}}>
//                                     <p id="sub">ML Tut</p>
//                                 </div>
//                                 <div style={{marginTop:"2%"}}>
//                                     <p id="sub">A006</p>
//                                 </div>
//                                 </div>
//                         </td>
                        
//                         <td></td>
//                         <td colspan="3"></td>
                        
//                         <td colspan="5" style={{textAlign:"center" , fontSize: "15px"}}>Lunch</td>
                       
//                         <td colspan="3"></td>
//                         <td colspan="3"></td>
                        
                       
                        
//                       </tr>
//                     <tr>
//                         <td style={{textAlign:"center"}}>Thursday</td>
//                         <td></td> 
//                         <td colspan="3" style={{backgroundColor:"rgb(40,231,82,0.60)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">ML(A)</p>
//                                     <p id="sub">ML(B)</p>
//                                     <p id="sub">QM</p>
//                                     <p id="sub">LST</p>
//                                     <p id="sub">USPP</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C101</p>
//                                     <p id="sub">C201</p>
//                                     <p id="sub">C13</p>
//                                     <p id="sub">C24</p>
//                                     <p id="sub">A006</p>
//                                 </div>
//                             </div>
                            
                            
//                         </td>
//                         <td colspan="3" style={{backgroundColor:"rgb(249, 249, 46,0.85)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">FOMB</p>
//                                     <p id="sub">DMG</p>
//                                     <p id="sub">AC</p>
//                                     <p id="sub">DCS</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C101</p>
//                                     <p id="sub">C201</p>
//                                     <p id="sub">C13</p>
//                                     <p id="sub">C13</p>
//                                 </div>
//                             </div>
//                           </td> 
//                           <td colspan="2"></td>
//                           <td colspan="3" style={{backgroundColor:"rgb(255,165,0,0.8)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%"}}>
//                                     <p id="sub">EVS</p>
//                                 </div>
//                                 <div style={{marginTop:"2%"}}>
//                                     <p id="sub">C102</p>
//                                 </div>
//                             </div>
//                           </td>
//                           <td colspan="3" style={{backgroundColor:"rgb(173,250,9,0.60)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">CM</p>
//                                     <p id="sub">DIP(A)</p>
//                                     <p id="sub">DIP(B)</p>
//                                     <p id="sub">AML</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">A006</p>
//                                     <p id="sub">C01</p>
//                                     <p id="sub">C11</p>
//                                     <p id="sub">C03</p>
//                                 </div>
//                                 </div>
//                           </td> 
//                           <td colspan="3" style={{backgroundColor: "rgb(44,228,240,.50)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">CM</p>
//                                     <p id="sub">DIP(A)</p>
//                                     <p id="sub">DIP(B)</p>
//                                     <p id="sub">AML</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">A006</p>
//                                     <p id="sub">C01</p>
//                                     <p id="sub">C11</p>
//                                     <p id="sub">C03</p>
//                                 </div>
//                             </div>
//                           </td> 
                       
                        
                        
//                       </tr>
//                       <tr>
//                         <td style={{textAlign:"center"}}>Thursday</td>
//                         <td></td> 
//                         <td colspan="3" style={{backgroundColor:"rgba(59, 120, 241, 0.54)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">CGAS</p>
//                                     <p id="sub">CMP</p>
//                                     <p id="sub">IIA</p>
//                                     <p id="sub">OWC</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C01</p>
//                                     <p id="sub">C02</p>
//                                     <p id="sub">C210</p>
//                                     <p id="sub">C13</p>
//                                 </div>
//                             </div>
//                           </td>
//                           <td colspan="3" style={{backgroundColor: "rgb(248,93,6,0.58)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">CBB</p>
//                                     <p id="sub">MAD</p>
//                                     <p id="sub">NS</p>
//                                     <p id="sub">CldC</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C03</p>
//                                     <p id="sub">C215</p>
//                                     <p id="sub">C21</p>
//                                     <p id="sub">C213</p>
//                                 </div>
//                             </div>
//                           </td>
//                         <td colspan="5"></td>
//                         <td colspan="3" style={{backgroundColor: "rgb(255,24,10,0.60)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">MLBA</p>
//                                     <p id="sub">NLP</p>
//                                     <p id="sub">DF</p>
//                                     <p id="sub">DSP</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C102</p>
//                                     <p id="sub">C01</p>
//                                     <p id="sub">A106</p>
//                                     <p id="sub">A006</p>
//                                 </div>
//                             </div>
//                           </td> 
//                         <td colspan="3" style={{backgroundColor: "rgb(246,7,122,0.65)"}}>
//                             <div style={{flexDirection:"row", display: "flex"}}>
//                                 <div style={{marginTop:"2%", marginLeft: "22%"}}>
//                                     <p id="sub">BioP</p>
//                                     <p id="sub">AAG</p>
//                                     <p id="sub">IRoB</p>
//                                     <p id="sub">AI</p>
//                                 </div>
//                                 <div style={{marginTop:"2%", marginLeft: "10%"}}>
//                                     <p id="sub">C01</p>
//                                     <p id="sub">C11</p>
//                                     <p id="sub">B105</p>
//                                     <p id="sub">C102</p>
//                                 </div>
//                             </div>
//                         </td>
//                       </tr>
//               </table>
//             </div>
//         </div>
//         </div>
 

export default Nav;
