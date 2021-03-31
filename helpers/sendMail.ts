import fs from "fs";
import path from'path';
import transporter from "../Mail/Config"

const send = async ( name:string, email:string, tel:string, message:string  ) => {
    
    try {

        const appRoot = process.cwd();
        
        const htmlstream = fs.createReadStream( appRoot + "/templates/thanks.html" );

        //make mailable object
        const mailConfig:any = {
            from: email,
            to: 'erickalvacontact@gmail.com',
            subject: 'New Contact Form Submission',
            // text: `from: ${ name } contact details email: ${ email } phone: ${ tel } message: ${ message }`,
            html: htmlstream,
        }

       const response: any = await processMail( mailConfig );

       if( ! response )
            throw new Error( response.toString() );
        
    } //end try 
    catch (error) {
        throw new Error( error );
    } //end catch

} //end function

const processMail = ( mailConfig: any ) => {

    return new Promise( ( resolve, reject ) => {

        transporter.sendMail( mailConfig, ( error, response ) => {

            error ? reject( error ) : resolve( true );
            transporter.close();
       } );

    } );
} //end function

export default send;

