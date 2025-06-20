export default function Checkbox({label,id}) {

    return (
        <div class="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id={id}/>
            <label className="form-check-label">{label}</label>
        </div>
    )
}


