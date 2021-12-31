import AddressSection from "./AddressSection"
import EmailSection from "./EmailSection"

export default function ContactSection() {
    return (
        <div className="flex flex-col my-20 mx-10 sm:mx-40  lg:flex-row bg-light-blue w-fit min-h-screen lg:m-20">
           
                <AddressSection />

                <EmailSection />
        </div>
    )
}
