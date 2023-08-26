
type CircleArgs = {
  left: number,
  top: number,
}

const Circle = ({left, top}: CircleArgs): JSX.Element => (
  <>
    <div className="circle absolute " style={{
        position: 'fixed',
        left,
        top,
      }}/>
  </>
)

export default Circle