import { useLoading } from "../../contexts/loadingContext"

const Loading = () => {

    const { isVisible } = useLoading()


    // if (isVisible) {
    //     return (
    //         <div className="w-full h-full bg-black flex justify-center top-0 left-0 fixed items-center bg-opacity-50 z-50">
    //             <div className="w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-full animate-spin"></div>
    //         </div>
    //     )
    // }
    
    return (
        <>
            {isVisible && (
                <div className="w-full h-full bg-black flex justify-center top-0 left-0 fixed items-center bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
        </>
    )
}

export { Loading }