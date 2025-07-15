import './index.css'

export default function Input({type = "text",label,placeholder,id, ...rest}) {

    return (
        <div className="mb-3">
            <label 
            className="form-label fw-medium">{label}</label>

            <input 
                type={type} 
                className="form-control custom-input" 
                id={id} 
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}
