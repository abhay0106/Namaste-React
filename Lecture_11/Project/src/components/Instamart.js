import {useState} from 'react' 

const Section = ({ title, description,isVisible,setIsVisible }) => {
    console.log(isVisible)  
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="text-bold text-3xl">{title}</h3>
            {isVisible ? (
            <button onClick={() => setIsVisible(false)} 
            className="cursor-pointer underline"
            >
            Hide
            </button>
            ) : (
            <button onClick={() => setIsVisible(true)} 
            className="cursor-pointer underline"
            >
            Show
            </button>
            )}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const[visibleSection,setVisibleSection] = useState("team")
    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."}
                isVisible={visibleSection === 'about'}
                setIsVisible = {() => setVisibleSection("about")}

            />

            <Section
                title={"Team Instamart"}
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."}
                isVisible={visibleSection === 'team'}
                setIsVisible = {() => setVisibleSection("team")}
            />

            <Section
                title={"Careers"}
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."}
                isVisible = {visibleSection === "career"}
                setIsVisible = {() => setVisibleSection("career")}
            />
        </div>
    )
}

export default Instamart;