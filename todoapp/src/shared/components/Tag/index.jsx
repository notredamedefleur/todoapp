import {Input, Span, TagInput, Wrapper} from "./styles.js";
import * as FONTS from "../ui-kit/consts/fonts/FONTS.jsx";
import React, {useEffect, useRef, useState} from "react";

// export const AddNewTag = ({ tagName, tagColor, addNewTag }) => {
//   return (
//     <Wrapper tagColor={tagColor}>
//         <ResizableInput />
//       {/*<TagInput tagColor={tagColor} defaultValue={tagName} onBlur={(e) => addNewTag(e)} onKeyUp={(e) => e.key === 'Enter' ? addNewTag(e) : null} />*/}
//     </Wrapper>
//   );
// };

export const AddNewTag = ({content, setContent, tagColor, addNewTag}) => {
    const [width, setWidth] = useState(0);
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [content]);

    const changeHandler = evt => {
        setContent(evt.target.value);
    };

    return (
        <>
            <Span id="hide" ref={span}>{content}</Span>
            <Input type="text" tagColor={tagColor} defaultValue={content} style={{ width }} onChange={changeHandler} onBlur={addNewTag} onKeyUp={(e) => e.key === 'Enter' ? addNewTag(e) : null} />
        </>
    );
};


export const Tag = ({ tagName, tagColor, handleTagClick }) => {
//handletagclick aint working
  return (
    <Wrapper tagColor={tagColor}>
        <div style={{backgroundColor:tagColor}} onClick={handleTagClick}>{tagName}</div>
    </Wrapper>
  );
};
