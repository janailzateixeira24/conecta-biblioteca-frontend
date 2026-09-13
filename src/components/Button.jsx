function Button({ children, onClick, className = '' }) {
  return (
    <button
      className={`primary-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button