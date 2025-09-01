import './WorldTyper.css';

function WorldTyper() {

    return (
        <>
            <div className="text-2xl m-6">
                <h1 className="text-center">World Typer app</h1>
                <div className=" w-9/12 border-green-900 border-4 justify-self-center">
                    <div className="grid grid-cols-3 gap-2 p-3 m-2 border-black border-4">
                        <div className="flex flex-col items-center border-1">
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter">á</button>
                                <button className="buttonLetter">ā</button>
                            </div>
                            <div className="flex-row m-3 px-1 space-x-3">
                                <button className="buttonLetter">ē</button>
                            </div>
                        </div>

                        <div className="h-80 col-span-2 bg-blue-500 "></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorldTyper;