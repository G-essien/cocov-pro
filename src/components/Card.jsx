

// Card component to display an icon, title, and description in a styled container
const Card = ({ icon, title, description }) => {
    return (
      <div>
        {/* Icon displayed with a large size and custom color */}
        <div>{icon}</div>
        
        {/* Title of the card, styled with custom color and font properties */}
        <h3>{title}</h3>
        
        {/* Description text styled with a muted color and center alignment */}
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;
  