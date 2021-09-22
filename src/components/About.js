import React from 'react'


export default function About(props) {
    /*let myStyle ={
        color:'black',
        backgroundColor:'#EAFEDD',
        
    }*/
    /*const[myStyle, setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
       
    })*/

    let myStyle ={
        color: props.mode ==='dark' ? 'white':'rgb(70 126 136)',
        backgroundColor: props.mode ==='dark' ? 'rgb(70 126 136)':'white'
    }
    let textStyle={
        color: props.mode ==='dark'?'white':'black'
    }
    
    //const[btnText, setBtnText]=useState("Enabled Light Mode")

    /*const toggleStyle =()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'#EAFEDD'
            })
            setBtnText("Enabled Dark Mode")
            
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enabled Light Mode")
        }
    }*/
    return (
        <>
        
        <div className="container" >
        <h2 className="my-3 mx-3" style={textStyle}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly and efficient. It will gives you word count, character count or various conversions. 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. 
                            Thus it is suitable for writing text with words/ character limit.
                        </div>
                    </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firebox, Internet Explorer, Safari, Opera.
                        It suits to count characters in facebook, blog, books, excel document, pdf document, eassay etc.
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="container">
            <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
    </div>*/}
        </div>
        
        </>
    )
}
