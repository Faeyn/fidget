
type Button = {
    text: string
    onClick: () => void
}

const Button: React.FC<Button> = ({text, onClick}): JSX.Element => (
      <div className="flex items-center justify-center">
        <div 
          onClick={onClick}
          className="border-[5px] px-[50px] py-[20px] border-solid border-black text-xl rounded-[30px] bg-gradient-to-b from-slate-700 to-blue-300">
            {text}

          </div>
      </div>
)

export default Button