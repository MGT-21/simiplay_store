import './index.css'

export default function Checkbox({label,id}) {

    return (
        <div class="mb-3 form-check">
            <input type="checkbox" className="form-check-input custom-check" id={id}/>
            <label className="form-check-label">{label}</label>
        </div>
    )
}


