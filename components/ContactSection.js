import AddressSection from "./AddressSection"
import EmailSection from "./EmailSection"

export default function ContactSection() {
    return (
        <div className="flex flex-col mt-8 mb-20 sm:my-20 mx-5 xsm:mx-10 md:mx-40  lg:flex-row bg-light-blue w-fit min-h-screen lg:m-20">
           
                <AddressSection />

                <EmailSection />
        </div>
    )
}
