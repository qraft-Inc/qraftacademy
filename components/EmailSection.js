import  { useForm, ValidationError } from "@formspree/react"


export default function MailSection() {
  const [state, handleSubmit] = useForm("mzbogwno");  


  if (state.succeeded){
    return (
      <div className="flex flex-col justify-center items-center text-xl font-bold text-white bg-light-blue lg:w-1/2 m-5">
      <p className="mb-10 xs text-4xl">Submitted!</p>
      <p className="text-center mb-10 text-3xl">Thank you for reaching out.</p> 
      </div>
    )
  } 

  return (
    <div className="bg-light-blue min-h-screen lg:w-1/2 mb-10">
      <div className="mx-8 xsm:mx-14 my-12">
        <h3 className="mb-12 text-3xl font-bold text-white lg:w-2/3">SEND YOUR MESSAGE</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="text" name="name" placeholder="Name*" required/>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="tel" name="phone" placeholder="Phone*" />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div className="w-full mt-5">
              <input className="w-full p-3" type="email" name="email" placeholder="Email*" required/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="w-full mt-5">
              <textarea className="w-full p-3" rows="5" name="message" placeholder="Type your message here..." required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="mt-5">
              <button type="submit" disabled={state.submitting} className=" text-white bg-blue-900 inline-flex items-center justify-center  px-9 py-3 text-base font-semibold leading-6 rounded-full w-auto uppercase  hover:text-blue-900 hover:bg-white transition duration-300">send email</button>
              <ValidationError errors={state.errors} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
