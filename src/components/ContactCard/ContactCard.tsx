import { useRef, useState } from "react"
import Style from "./ContactCard.module.scss"
import BgHero from "public/bg-pattern-hero-home.svg"
import ExclamationIcon from "../ExclamationIcon/ExclamationIcon"

const ContactCard: React.FC = () => {
  const [nameMessage, setNameMessage] = useState<boolean>(false)
  const nameRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const [emailMessage, setEmailMessage] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const [phoneMessage, setPhoneMessage] = useState<boolean>(false)
  const phoneRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const messageRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement)

  
  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault()
    setNameMessage(false), setEmailMessage(false), setPhoneMessage(false)
    if (nameRef.current?.value.length === 0 ) {
      setNameMessage(true)
    } else if (emailRef.current?.value.length === 0) {
      setEmailMessage(true)
    } else if (phoneRef.current?.value.length === 0) {
      setPhoneMessage(true)
    } else {
      nameRef.current.value = ''
      emailRef.current.value = ''
      phoneRef.current.value = ''
      messageRef.current.value = ''
    }
  }

  return (
    <section className={Style.contact_card} style={{ backgroundImage: `url(${BgHero.src})` }}>
      <div className={Style.text_content}>
        <h1>contact us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </div>
      <form className={Style.contact_form} onSubmit={handleSubmit}>
        <div className={`${Style.container} ${nameMessage === true ? `${Style.show}` : ''}`}>
          <input ref={nameRef} type="text" name="name" id="name" className={Style.form_input} placeholder="Name"/>
          <span>Can´t be empty <ExclamationIcon /></span>
        </div>
        <div className={`${Style.container} ${emailMessage === true ? `${Style.show}` : ''}`}>
          <input ref={emailRef} type="email" name="email" id="email" className={Style.form_input} placeholder="Email Address" />
          <span>Can´t be empty <ExclamationIcon /></span>
        </div>
        <div className={`${Style.container} ${phoneMessage === true ? `${Style.show}` : ''}`}>
          <input ref={phoneRef} type="tel" name="tel" id="tel" className={Style.form_input} placeholder="Phone"/>
          <span>Can´t be empty <ExclamationIcon /></span>
        </div>
        <textarea ref={messageRef} name="message" id="message" cols={40} rows={4} placeholder="Your Message"></textarea>
        <button type="submit">submit</button>
      </form>
    </section>
  )
}

export default ContactCard