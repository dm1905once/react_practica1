import './WorldTyper.css';
import {useState} from "react";

function WorldTyper() {
    const [inputText, setInputText] = useState("");

    function typeLetter(event) {
        setInputText(prevState => prevState + event.target.textContent);
    }

    function refreshTextArea(event){
        setInputText(event.target.value);
    }

    function clearTextArea(){
        setInputText("");
    }

    const copyToClipboard = async (event) => {
        await navigator.clipboard.writeText(inputText);
        clearTextArea();;
    }

    return (
        <>
            <div className="text-2xl m-6">
                <h1 className="text-center">World Typer app</h1>
                <div className=" w-9/12 border-amber-600 border-2 rounded-2xl justify-self-center">
                    <div className="grid grid-cols-3 gap-2 p-3 m-2">
                        <div className="flex flex-col items-center ">
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>á</button>
                                <button className="buttonLetter" onClick={typeLetter}>ā</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ē</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ī</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>š</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ú</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ļ</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ņ</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter" onClick={typeLetter}>ņ</button>
                            </div>
                        </div>

                        <div className="h-80 col-span-2">
                            <div className="flex flex-col items-center mt-3  ">
                                <textarea rows="4" cols="30" className="textArea" value={inputText} onChange={refreshTextArea}></textarea>
                                <div>
                                    <button className="buttonAction" onClick={copyToClipboard}>Copy</button>
                                    <button className="buttonAction" onClick={clearTextArea}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorldTyper;