import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

// import { Card, styled } from '@mui/material';
// const StyledCard = styled(Card)({
//     '&:hover': {
//         transform: 'scale(1.5)',
//         borderRadius: 0,
//         height: 200
//     }
// })

// const Meme = ({ meme }) => {
//     return (
//         <StyledCard>
//             <img src={meme.data.url} alt="meme" style={{ height: 200 }} />
//         </StyledCard>
//     )
// }

const MyGallery = ({meme}) => {
    return(
    <Gallery>
      <Item
        original={meme.data.url}
        thumbnail={meme.data.url}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={meme.data.url} style={{ height: 500 , padding:10 }} alt=".  THIS MEME IS DARKER THAN THIS BACKGROUND ◉⁠‿⁠◉" />
        )}
      </Item>
    </Gallery>
  )
}
export default MyGallery;