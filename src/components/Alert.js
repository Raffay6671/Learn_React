import React from "react";

export default function Alert(props) {

    // const FirstCharacterCapital = (word) =>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);  //This will make the first character AS Capital and the other as small

    // }

    const FirstCharacterCapital = (word) => {
        if (typeof word === 'string' && word.length > 0) {
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        } else {
            return ''; // or handle the case where word is undefined or empty differently
        }
    }
    
  return (
    //Now checking the use of props.alert , if it is empty then the portion next to it would not be evaluated, else evaluated. Many people use this but it is not prescribed 
    //Don't really know about the functionality of this literals inside the className

   
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{FirstCharacterCapital(props.alert.type)}</strong>  {props.alert.mssge}
      
        
      
    </div>
  );
}

