import Navbar from "./Navbar"
import Onboarding from "./Onboarding"

const Header = () => {
    return (
        <header className="py-3">
            <Onboarding />
            <Navbar />
        </header>
    )
}

export default Header