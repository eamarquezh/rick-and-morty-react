import './TitleFonts.css';
// eslint-disable-next-line react/prop-types
export default function Title({title}) {
    return (
        <h1 className='text-center text-6xl font-bold m-5'>
            {title}
        </h1>
    )
  }
  