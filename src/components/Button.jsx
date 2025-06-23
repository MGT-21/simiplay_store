import './Button.css'

export default function Button({type,text,href,id}) {

        if (href == undefined){
            return (
                <button className="btn fw-bold btn-custom text-black w-100" type={type} id={id}>
                    {text} 
                </button>
         )}else {
            return (
                <a className="btn btn-outline-custom fw-bold text-custom w-100" type={type} href={href}>
                    {text}
                </a>
         )}
}
