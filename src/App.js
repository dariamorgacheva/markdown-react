import React from 'react';
import { useState } from 'react';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown'

function App() {
  const [text, setText] = useState('');
  // const [message, setMessage] = useState('');
  return (
    <div>
 

    <div className='container'>
      <h1 className='text-center'>Markdown</h1>
      <div className='flex'>
        <div>
        <h3 className='text-center'>Editor</h3>
          <textarea 
            className="input-style"
            id="editor"
            type="text" 
            onChange={(event) => setText(event.target.value)}
            placeholder='Your Message'
            />
          {/* <button onClick={()=> setMessage(text)}>Submit</button> */}
          
        </div>
        <div>
        <h3 className='text-center'>Preview</h3>
        <ReactMarkdown 
            className='output-style'
            // id='preview'
            //  dangerouslySetInnerHTML={{
            //       __html: text,
                // }}
                >{text}</ReactMarkdown>
        </div>
      </div>
      
      </div>
     </div>
)
};


export default App;