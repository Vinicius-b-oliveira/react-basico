import './style.css'

export const Button = ({ label, showLabel }) => {
    return <button className="btn" onClick={() => showLabel(label)}>{label}</button>
}