import transporter from "../Mail/Config"

const send = async ( name:string, email:string, tel:string, message:string  ) => {

	//make mailable object
	const mailConfig:any = {
        from: email,
        to: 'erickalvacontact@gmail.com',
        subject: 'New Contact Form Submission',
        text: `from: ${ name } contact details email: ${ email } phone: ${ tel } message: ${ message }`,
    }

    try {

        const response = await transporter.sendMail( mailConfig );
        console.log( response );
        
    } //end try 
    catch (error) {

        console.log( error );
        throw new Error( error );
    } //end catch

} //end function

export default send;

