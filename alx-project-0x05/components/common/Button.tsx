import { ButtonProps } from "@/interfaces";

//Defining button component
const Button = ({buttonLabel , buttonSize, buttonBackgroundColor  , action }: ButtonProps) => {
  /* Map the buttonBackgroundColor to specific CSS classes or use a default class */
  const buttonColorClasses = buttonBackgroundColor ? {
    red : 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }[buttonBackgroundColor] : 'bg-slate-500' // Default class if no color is provided


  return(
    <button className={`${buttonColorClasses} ${buttonSize} px-6 p-2 text-sm  font-semibold 
    rounded-lg hover:${buttonColorClasses}/50 transition duration-500 text-white ` }>
      {buttonLabel}
    </button>
  )
};

export default Button;