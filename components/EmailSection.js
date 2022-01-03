

export default function MailSection() {
  return (
    <div className="bg-light-blue min-h-screen lg:w-1/2 mb-10">
      <div className="mx-8 xsm:mx-14 my-12">
        <h3 className="mb-12 text-3xl font-bold text-white lg:w-2/3">SEND YOUR MESSAGE</h3>
        <div>
          <form>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="text" name="name" placeholder="Name*" />
            </div>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="tel" name="phone" placeholder="Phone*" />
            </div>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="email" name="email" placeholder="Email*" />
            </div>
            <div className="w-full mt-5">
              <textarea className="w-full p-3" rows="5" name="message" placeholder="Type your message here..."></textarea>
            </div>
            <div className="mt-5">
              <button className=" text-white bg-blue-900 inline-flex items-center justify-center  px-9 py-3 text-base font-semibold leading-6 rounded-full w-auto uppercase  hover:text-blue-900 hover:bg-white transition duration-300">send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
