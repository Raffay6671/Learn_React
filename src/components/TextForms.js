
import React, {useState} from 'react'


export default function TextForm(props){

    const [text, setText] = useState('');

    const HandleUpperClick = () =>{

        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Upper Case!","Success");

    }

    const HandleLowerClick = () =>{

        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lower Case!","Success");

    }
           
    const onChangehandler = (event) =>{

        console.log("On changed functionality is done");
        setText(event.target.value);
        console.log(text);
        
        
    }

    const ClearText = () => {
        let newText1="";
        setText(newText1);
        props.ShowAlert("Text Cleared!","Success");



    }

    return (
            <>

                
                <div className="mb-3">
                <h1 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                    Welcome to My App
                    
                </h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color : props.mode === 'dark' ? 'white' : 'black'}} >{props.ExampleTextForm}</label>
                
                <textarea className="form-control" value={text} onChange={onChangehandler} style={{backgroundColor : props.mode === 'dark' ? '#212529' : props.mode === 'blue' ? '#8AB6D6' :'white', color: props.mode === 'dark'?'white' : props.mode === 'blue' ? 'black': 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

                <button type="button" className="btn btn-primary" onClick={HandleUpperClick}  >UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={HandleLowerClick}  >LowerCaseCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={ClearText}  >ClearText</button>









                <div className='container my-4' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                    <h2>Welcome to the Details of your Above Operation:</h2>
                    <br />
                    {/* <p>The Total Words: {text.trim().split(/\s+/).length}</p> */}
                    <p>The Total Words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>


                    <br />
                    <p>The Total Characters: {text.replace(/\s/g, '').length}</p>

                    <br />
                    <p>The Total Time Taken to read all your words is:  {0.08*text.split(" ").length} minutes</p>

                </div>




            </>


    );
}