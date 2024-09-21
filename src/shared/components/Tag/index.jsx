import {Input, Span, TagName, Wrapper} from "./styles.js";
import React, { useEffect, useRef, useState } from "react";


export const AddNewTag = ({ content, setContent, tagColor, addNewTag }) => {
  const [width, setWidth] = useState(0);
  const span = useRef();

  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [content]);

  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };

  return (
    <>
      <Span id="hide" ref={span}>
        {content}
      </Span>
      <Input
        type="text"
        tagColor={tagColor}
        defaultValue={content}
        style={{ width }}
        onChange={changeHandler}
        onBlur={(e) => addNewTag(e)}
        onKeyUp={(e) => (e.key === "Enter" ? addNewTag(e) : null)}
        onClick={(e) => {(content === '+ Add New Tag') ? e.target.value = '' : null}}
      />
    </>
  );
};

export const Tag = ({ tagName, tagColor, handleTagClick }) => {
  return (
    <Wrapper tagColor={tagColor} onClick={handleTagClick}>
      <TagName tagColor={tagColor}>{tagName}</TagName>
    </Wrapper>
  );
};
