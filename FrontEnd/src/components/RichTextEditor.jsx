import React from 'react';
import Editor, {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  BtnClearFormatting,
  BtnUndo,
  BtnRedo,
  BtnStyles,
  HtmlButton,
  Separator,
  EditorProvider,
  Toolbar,
} from 'react-simple-wysiwyg';

const RichTextEditor = ({ value, onRichTextEditorChange }) => {
  return (
    <EditorProvider>
      <Editor
        value={value || ""}
        onChange={(e) => {
          if (onRichTextEditorChange) {
            onRichTextEditorChange(e.target.value);
          }
        }}
      >
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          <BtnClearFormatting />
          <HtmlButton />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
};

export default RichTextEditor;
