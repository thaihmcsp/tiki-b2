import React, { Component, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './textArea.css'

function TextArea({placeholder}) {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };

  return (
    <div>
       <div className="description">
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
            </div>
    </div>
  )
}

export default TextArea