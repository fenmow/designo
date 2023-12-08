import { useEffect, useRef } from "react"
import Style from "./ContactCard.module.scss"
import BgHero from "public/bg-pattern-hero-home.svg"

const ContactCard: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null)

  
  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault()
    if (nameRef.current?.value === '' ) {
      console.log('teste')
    }
  }

  return (
    <section className={Style.contact_card} style={{ backgroundImage: `url(${BgHero.src})` }}>
      <div className={Style.text_content}>
        <h1>contact us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </div>
      <form className={Style.contact_form} onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" id="name" className={Style.form_input} placeholder="Name"/>
        <input type="email" name="email" id="email" className={Style.form_input} placeholder="Email Address" required />
        <input type="tel" name="tel" id="tel" className={Style.form_input} placeholder="Phone" required/>
        <textarea name="message" id="message" cols={40} rows={4} placeholder="Your Message"></textarea>
        <button type="submit">submit</button>
      </form>
    </section>
  )
}

export default ContactCard