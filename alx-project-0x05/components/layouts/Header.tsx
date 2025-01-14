import Link from "next/link";
import Button from "../common/Button";
import { useCount } from "@/context/CountContext"
import { usePathname } from "next/navigation"

const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname of the app
  const { count } = useCount(); // Access the count value from the CountContext

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8 ">

        {/* Logo linking to the homepage */}
        <Link href='/' className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {

            // Conditional rendering based on the current pathname
            !["/counter-app"].includes(pathname) ? (

              <>

                {/*Show Sign In and Sign Up buttons if not on "/counter-app" */}
                <Button
                  buttonLabel="Sign In"
                  buttonBackgroundColor="red"
                />
                <Button
                  buttonLabel="Sign Up"
                  buttonBackgroundColor="blue"
                />
              </>

            ) : (

              // Show the current count if on "/counter-app"
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }

        </div>
      </div>
    </header>
  )
};

export default Header;