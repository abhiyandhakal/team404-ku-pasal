import UploadImageStyled from '../styled-components/form-elements/upload-image.styled'
import { BiUpload } from 'react-icons/bi'
import P from '../styled-components/typography/p.styled'

const UploadImage = ({ setThumbnail }) => {
	return (
		<UploadImageStyled
			onClick={() => document.getElementById('image-uploader').click()}
		>
			<BiUpload />
			<P>Enter link to your thumbnail</P>
			<input
				type='text'
				id='image-uploader'
				onChange={(e) => setThumbnail(e.target.value)}
			/>
		</UploadImageStyled>
	)
}

export default UploadImage
