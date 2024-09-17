const Theme = () => {
    let theme = "DARK"
    // let theme = "WHITE"
    return (
        <>
            <div className={` ${theme == "DARK" ? 'dark' : ""}`}>
                <h1>Theme</h1>
                <button>toggle</button>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam itaque vel odit corporis eaque eligendi illo earum temporibus ab, similique odio esse id, architecto numquam sint enim impedit beatae facilis?</p>
            </div>

        </>
    )
}

export default Theme
