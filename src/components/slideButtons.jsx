const BaseButton = ({moveSlides, arrowText}) => {
  return (
    <button onClick={moveSlides} style={{
      fontSize: '30px',
      paddingTop: '5px',
      paddingBottom: '0px',
      paddingLeft: '30px',
      paddingRight: '30px',
    }}> {arrowText} </button>
  )
}

export const PreviousButton = ({onPrev}) => {
  return (
    <BaseButton moveSlides={onPrev} arrowText={"🢀 "} />
  )
}

export const NextButton = ({onNext}) => {
  return (
    <BaseButton moveSlides={onNext} arrowText={"🢂 "} />
  )
}
