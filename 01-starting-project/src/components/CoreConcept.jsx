export default function CoreConcept({image, title, description}) { // target incoming objects by fields: Object destracturing
  return <li>
    <img src={image} alt={title} />
    <h3>{title}</h3> 
    <p>{description}</p>
  </li>
}