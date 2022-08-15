import logo from '../../public/JD360.png'
import Image from 'next/image'

interface LogoProps {
  width: string
  height: string
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <>
      <Image width={width} height={height} src={logo} alt="Logo" />
    </>
  )
}

export default Logo
