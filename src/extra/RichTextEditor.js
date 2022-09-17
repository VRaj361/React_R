import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
export const RichTextEditor = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('')
    // const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		placeholder:  'Start typings...'
	// 	},
	// 	[placeholder]
	// );

    const config = {
			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
			placeholder:  'Start typings...'
    }//here config create a problem
    
  return (
    <div>
        <JoditEditor
			ref={editor}
			value={content}
			// config={config}
			
			onChange={newContent => {setContent(newContent)}}
		/>

        {content}
    </div>
  )
}


