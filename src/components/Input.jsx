export default function Input({type,label,placeholder,id}) {

    return (
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-medium">{label}</label>
            <input type={type} className="form-control" id={id} aria-describedby="emailHelp" placeholder={placeholder}/>
        </div>
    )
}
