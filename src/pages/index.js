import React from "react"
import { 
  makeStyles,
  createStyles,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'




const useStyles = makeStyles(theme => createStyles({
  header: {
    // height: '60px',
    width: '100%',
    overflow: 'hidden'
  },
  strong: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  callout: {
    backgroundColor: '#ddd',
    borderRadius: '3px',
    marginBottom: theme.spacing(2)
  }
}))

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box m={6}>

        <Card elevation={0} className={classes.header}>
          <CardMedia
            component="img"
            alt="flc logo"
            height="270px"
            image="flc_wide.png"
            title="flc logo"
          />
        </Card>

        <Box py={3}>
          <Typography variant="h3" component="h3">
            fair launch capital
          </Typography>
        </Box>

        <Box p={2} className={classes.callout}>
          <Typography variant="body1" display="inline">
            We’re not Fair Launch Capital. <span className={classes.strong}>We provide fair launch capital</span>.
          </Typography>
        </Box>

        <Box p={2} className={classes.callout}>
          <Typography variant="body1" display="inline">
            We're <span className={classes.strong}>not</span> a VC fund. We're a community resource providing free access to capital for new Fair Launch networks and projects.
          </Typography>
        </Box>

        <Box py={3}>
          <Typography variant="h4" component="h4" gutterBottom>
            A New Path
          </Typography>
          <Typography variant="body1" gutterBottom>
            A new path has emerged for crypto-native founders to launch the next generation of networks and companies: <span className={classes.bold}>the Fair Launch</span>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Fair Launch enables founders to leverage existing networks to bootstrap distribution and build long-term, highly engaged, collaborative communities. New forms of network collaboration—not competition—sit at the heart of the Fair Launch.
          </Typography>
        </Box>

        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            What is a Fair Launch?
          </Typography>
          <Typography variant="body1" gutterBottom>
            When we say Fair Launch, we mean:
          </Typography>

          <List>
            <ListItem><ListItemText>A decentralized crypto network that is earned, owned and governed by the community from the outset.</ListItemText></ListItem>
            <ListItem><ListItemText>Everyone can participate on equal footing.</ListItemText></ListItem>
            <ListItem><ListItemText>There is no early access, pre-mine or allocation of tokens.</ListItemText></ListItem>
          </List>

          <Box p={2} className={classes.callout}>
            <Typography variant="body1" display="inline">
              These are a first pass. If you have suggestions for improvements, let us know.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Container>
  )
}
