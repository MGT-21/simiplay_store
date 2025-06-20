
export default function Button({type,text,href,id}) {

        if (href == undefined){
            return (
                <button className="btn fw-bold btn-warning" type={type} id={id}>
                    {text} 
                </button>
         )}else {
            return (
                <a className="btn btn-outline-warning fw-bold" type={type} href={href}>
                    {text}
                </a>
         )}
}
