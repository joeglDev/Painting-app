import { ChangeEvent, useContext, useState } from "react";
import { BrushSettingsLi, BrushSettingsUl, BrushSettingsWrapper, H2 } from "./BrushSettings.style";
import { BrushContext } from "../context/BrushContext";

export const FileSettings = () => {
    //settings to save as image
    // save as file
    //load from file
    //see https://fjolt.com/article/html-canvas-save-as-image
    const {savedCanvas} = useContext(BrushContext);
    const [fileName, setFileName] = useState("React painter image");

    const saveImage = () => {
        if (savedCanvas) {
  // Convert our canvas to a data URL
  let canvasUrl = savedCanvas.toDataURL();

    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;


  // This is the name of our downloaded file
  createEl.download = fileName;

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
        }
    };

 return (
    <BrushSettingsWrapper>
    <H2>File settings</H2>
    <BrushSettingsUl>
        <BrushSettingsLi>
        <input type="text" placeholder="File name:" onChange={(e: ChangeEvent<HTMLInputElement>) => {setFileName(e.target.value)}}></input>
        <button onClick={() => saveImage()}>Save an image</button>
        </BrushSettingsLi>
        </BrushSettingsUl>
    </BrushSettingsWrapper>
)
};