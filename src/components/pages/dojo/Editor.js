import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import { useDojoContext } from "../../../contexts/DojoContext";
import { useThemeContext } from "../../../contexts/ThemeContext";

const initialStyle = {
  width: "100%",
  height: "500px",
  fontSize: 16
};

const toFullHeight = style => ({
  ...style,
  height: `${window.innerHeight - 230}px`
});

const Editor = ({ userCode, freeze, handleChange }) => {
  const [style, setStyle] = useState(toFullHeight(initialStyle));
  const { tabSize, fullScreen } = useDojoContext();
  const { isDarkMode } = useThemeContext();

  useEffect(() => setStyle(initialStyle), []);

  useEffect(
    () => setStyle(prev => (fullScreen ? toFullHeight(prev) : initialStyle)),
    [fullScreen]
  );

  return (
    <AceEditor
      mode="python"
      theme={isDarkMode ? "tomorrow_night_bright" : "crimson_editor"}
      onChange={handleChange}
      value={userCode}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={style}
      tabSize={tabSize}
      readOnly={freeze}
    />
  );
};

export default Editor;
