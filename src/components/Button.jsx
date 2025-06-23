import './Button.css'

export default function Button({type,text,id}) {

        return (
            <button className="btn fw-bold btn-custom text-black w-100" type={type} id={id}>
                {text} 
            </button>
        )  
}
