import UploadImageStyled from '../styled-components/form-elements/upload-image.styled'
import { BiUpload } from 'react-icons/bi'
import P from '../styled-components/typography/p.styled'

const UploadImage = () => {
	return (
		<UploadImageStyled
			onClick={() => document.getElementById('image-uploader').click()}
		>
			<BiUpload />
			<P>maximum of 5mb</P>
			<input
				type='file'
				accept='image/jpg, image/jpeg, image/png, image/gif, image/svg, image/webp'
				id='image-uploader'
				hidden
			/>
		</UploadImageStyled>
	)
}

export default UploadImage
