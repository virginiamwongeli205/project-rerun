export function Button({ children, onClick, variant = "primary" }) {
const base = "px-5 py-2 rounded-xl font-medium transition";
const styles = {
primary: "bg-green-600 text-white hover:bg-green-700",
outline: "border border-green-600 text-green-600 hover:bg-green-50",
};
return (
<button onClick={onClick} className={`${base} ${styles[variant]}`}>
{children}
</button>
);
}