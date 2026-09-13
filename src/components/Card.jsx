function Card({ title, value, description, icon }) {
  return (
    <div className="stat-card">
      <div>
        <span className="card-title">
          {title}
        </span>

        <strong className="card-value">
          {value}
        </strong>

        <span className="card-description">
          {description}
        </span>
      </div>

      <div className="card-icon">
        {icon}
      </div>
    </div>
  )
}

export default Card