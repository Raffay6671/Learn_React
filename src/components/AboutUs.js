import React, {useState} from 'react'




export default function AboutUs(props)
{

    const [MyStyle, SetMyStyle] = useState (

        {

            color: 'black',
            backgroundColor: 'white'

        }

    )
    const [Buttontext, SetButtonText] = useState("Enable dark Mode")

    const ModeSelector = () => {

        if (MyStyle.backgroundColor === 'black')
        {

            SetButtonText('Enable dark Mode');

                SetMyStyle({
                        color: 'black',
                        backgroundColor: 'white'

                })

        } 
        
        else{
            SetButtonText('Enable light Mode');

            SetMyStyle({
                color: 'white',
                backgroundColor: 'black'

        })
        }

    }
    


    
return(

    

    <>
        <div className="container my-5" style={MyStyle}>
        <h1 style={{backgroundColor : props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" >
                        <button className="accordion-button"  type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    </div>

        </div>



                            <div style={{ textAlign: 'center' }}>
                                <button type="button" className="btn btn-dark" onClick={ModeSelector}>{Buttontext}</button>
                            </div>




    </>

);

}