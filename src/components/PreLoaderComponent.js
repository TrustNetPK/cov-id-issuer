import React from 'react'

function PreLoaderComponent()
{
    return (
        <div className="preloader">
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        <span data-text-preloader="C" className="letters-loading">
                            C
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="V" className="letters-loading">
                            V
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="D" className="letters-loading">
                            D
                        </span>
                        <span data-text-preloader="-" className="letters-loading">
                            -
                        </span>
                        <span data-text-preloader="1" className="letters-loading">
                            1
                        </span>
                        <span data-text-preloader="9" className="letters-loading">
                            9
                        </span>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default PreLoaderComponent