import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    //service_a6o5i1u
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send('service_a6o5i1u',
                'template_rwdkssd', {
                from_name: form.name,
                to_name: 'James',
                from_email: form.email,
                to_email: 'msizajst@gmail.com',
                message: form.message
            },
                'VBlOdRYkToqr-0ABx'),


                setLoading(false)

            alert('Your Message Has Been Sent!')
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('Something Went Wrong!')

        }


    }
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text mt-3'> git commit -m "Reached out to James"</h3>


                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='John Doe' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='youremail@gmail.com' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='hire: 
    echo "Deploying James Matsheni to your
    team🚀" ' />
                        </label>

                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact