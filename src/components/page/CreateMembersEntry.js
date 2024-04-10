import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Form from '../page/Form';
import BottomNav from "../Nav/BottomNav";

export default function CreateMembersEntry() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNav />
      </Paper>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            ข้อมูล
          </Typography>
            <React.Fragment>
              <Form />
            </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}