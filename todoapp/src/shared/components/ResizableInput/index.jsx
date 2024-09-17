import React, { useState, useRef, useEffect } from 'react';

// export const AddNewTag = ({addNew, tagColor, tagName, addNewTag}) => {
//     const [content, setContent] = useState('+Add New Tag');
//     const [width, setWidth] = useState(0);
//     const span = useRef();
//
//     useEffect(() => {
//         setWidth(span.current.offsetWidth);
//     }, [content]);
//
//     const changeHandler = evt => {
//         setContent(evt.target.value);
//     };
//
//     return (
//         <wrapper>
//             <span id="hide" ref={span}>{content}</span>
//             <input type="text" style={{ width }} autoFocus onChange={changeHandler} />
//         </wrapper>
//     );
// };
