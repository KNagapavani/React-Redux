import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { IoLocation } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi"; 


const Contact = () => {
  return (
    <>
    <Container maxWidth="lg" className='contact'>
      <Typography variant="h2" component="h3" className='heading'>Contact Us</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className='contactus'>
          <Paper elevation={3} sx={{ p: 2 }} className='contact-paper'>
            <Box display="flex" alignItems="center" mb={2} className='location'>
              <IoLocation className='icon' sx={{ mr: 1 }}/>
              <Typography variant="h6" className='contact-heading'>Location:</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }} className='contact-content' >Pragathi Nagar, Hyderabad, India, 500090</Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <MdAttachEmail className='icon' sx={{ mr: 1 }}/>
              <Typography variant="h6" className='contact-heading'>Email:</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }} className='contact-content'>kandula.nagapavani64@email.com</Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <BiPhoneCall className='icon' sx={{ mr: 1 }}/>
              <Typography variant="h6" className='contact-heading'>Call:</Typography>
            </Box>
            <Typography variant="body1" className='contact-content'>+91 9346295612</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7} className='message'>
          <form action="action.php" method="POST">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required id="name" name="name" label="Your Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="email" name="email" label="Your Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="subject" name="subject" label="Subject" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="message"
                  name="message"
                  label="Message"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" className='send-btn'>Send Message</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
 </Container>

   
    </>
  );
};

export default Contact;
