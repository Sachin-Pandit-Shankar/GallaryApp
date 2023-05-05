// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumb, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb

  const updateImage = () => {
    updateThumbnail(id)
  }

  const activeBtn = isActive ? '' : 'hide-image'

  return (
    <li className="list-card">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={updateImage}
          className={`s-image ${activeBtn}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
