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
  Link,
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
  strongHighlight: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    backgroundColor: '#fbf8ae'
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
            <ListItem><ListItemText>➡️ A decentralized crypto network that is earned, owned and governed by the community from the outset.</ListItemText></ListItem>
            <ListItem><ListItemText>➡️ Everyone can participate on equal footing.</ListItemText></ListItem>
            <ListItem><ListItemText>➡️ There is no early access, pre-mine or allocation of tokens.</ListItemText></ListItem>
          </List>

          <Box p={2} className={classes.callout}>
            <Typography variant="body1" display="inline">
              These are a first pass. If you have suggestions for improvements, let us know.
            </Typography>
          </Box>
        </Box>

        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            Why Does a Fair Launch Matter?
          </Typography>
          <Typography variant="body1" gutterBottom>
            At its core, the Fair Launch enables founders to quickly get to market, while skipping the traditional fundraise and improving token distribution. For users, Fair Launches enable anyone to participate, creating new conditions for self-governing communities.
          </Typography>
          <Typography variant="body1" gutterBottom>
            So here we have a fundamentally disruptive way to bring new protocols to market, that both sides of the market (founders and users) want. But as we've seen from recent events, there are some early dynamics of the Fair Launch that can be improved.
          </Typography>
        </Box>

        <Box py={3}>
          <Typography variant="h4" component="h4" gutterBottom>
            A Platform to Evolve the Fair Launch
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Fair Launch approach to bootstrapping a network with other networks has only just emerged, and we believe that yield farming and liquidity mining are early distribution mechanisms that will improve. This will ultimately result in new Fair Launch ‘recipes’ that can be used to seed and bootstrap healthy, diverse, and profitable governing communities. 
          </Typography>
          <Typography variant="body1" gutterBottom>
            But we aren't content simply hoping for this outcome, so we're creating a platform to evolve the mechanisms and designs of a Fair Launch.
          </Typography>
        </Box>

        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            Our Hypothesis
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span className={classes.strongHighlight}>We believe a significant number of high-quality, crypto-native founders will choose the Fair Launch path if it's as viable as traditional alternatives.</span> If this is true, we will soon see more applications of the Fair Launch—enabling us to more quickly iterate on its mechanisms. 
          </Typography>
          <Typography variant="body1" gutterBottom>
            However, one key barrier to today's Fair Launch is the high cost of a code audit and early product work. This forces projects into the position of either shipping high risk contracts, or not shipping at all. 
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span className={classes.strong}>We’re here to change this.</span>
          </Typography>
        </Box>


        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            Our Approach
          </Typography>
          <Typography variant="body1" gutterBottom>
            Here’s how it works:
          </Typography>

          <List>
            <ListItem><ListItemText>1. We identify the most promising projects that want to do a Fair Launch.</ListItemText></ListItem>
            <ListItem><ListItemText>2. We make a <span className={classes.strongHighlight}>no-strings-attached grant</span> to cover the costs of audit and launch.</ListItemText></ListItem>
            <ListItem><ListItemText>3. <span className={classes.strongHighlight}>We never take any allocation of tokens before launch.</span></ListItemText></ListItem>
            <ListItem><ListItemText>4. After launch, we initiate a governance vote to let the community decide to <span className={classes.strongHighlight}>pay the grant forward</span> to the next project that wants to do a Fair Launch.</ListItemText></ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            In addition, we connect Fair Launch projects with the top founders and economic designers in the networks they’ll likely want to leverage and partner with in bootstrapping their own. The founding team will be able to experiment with—and evolve—these early Fair Launch mechanisms with support from a talented community.
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.bold}>
            We hope this platform and approach can enable a generation of networks capable of bootstrapping themselves in more economically symbiotic—not parasitic—ways.
          </Typography>
        </Box>



        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            Core Team
          </Typography>
          <Typography variant="body1" gutterBottom>
            We believe a major shift in existing power dynamics is made possible by exploring and further developing Fair Launch mechanics. We’re here to prove the viability of this new model so future founders can benefit from its evolution. 
          </Typography>

          <List>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/gavinmcdermott">➡️ Gavin McDermott</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/Joe_Gerber_">➡️ Joe Gerber</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/bramanathan">➡️ Reuben Bramanathan</Link>
            </ListItemText></ListItem>
          </List>
        </Box>




        <Box pb={3}>
          <Typography variant="h5" component="h5" gutterBottom>
            Advisors
          </Typography>
          <Typography variant="body1" gutterBottom>
            We’ve assembled a group of crypto natives who believe that Fair Launch and community ownership are critical to the long-term success of new networks, existing networks, and the crypto ecosystem as a whole. Our collective goal is to get more high-quality, economically successful, and widely distributed projects into the wild.
          </Typography>

          <List>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/Cooopahtroopa">➡️ Cooper Turley</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/StaniKulechov">➡️ Stani Kulechov</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/kaiynne">➡️ Kain Warwick</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/CamiRusso">➡️ Camila Russo</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/RyanSAdams">➡️ Ryan Sean Adams</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/ljxie">➡️ Linda Xie</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/Flynnjamm">➡️ Brian Flynn</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/jchervinsky">➡️ Jake Chervinsky</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/js_horne">➡️ Jacob Horne</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/jbrukh">➡️ Jake Brukhman</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/cyounessi1">➡️ Cyrus Younessi</Link>
            </ListItemText></ListItem>
            <ListItem><ListItemText>
              <Link href="https://twitter.com/willwarren89">➡️ Will Warren</Link>
            </ListItemText></ListItem>
          </List>
        </Box>





        <Box pb={3}>
          <Typography variant="h4" component="h4" gutterBottom>
            A Call for Our First Fair Launch Founder
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are running the first Fair Launch experiment with a founding team and network that will be selected soon.
          </Typography>
          <Typography variant="body1" gutterBottom>
            So if you’re a founder who wants to work with our team and this amazing network of people committed to evolving the Fair Launch, let us know about your project in a quick email (<span className={classes.strongHighlight}>launchfair@fairlaunch.capital</span>)
          </Typography>
        </Box>




        <Box pb={3}>
          <Typography variant="h4" component="h4" gutterBottom>
            Join the Fair Launch Community
          </Typography>
          <Typography variant="body1" gutterBottom>
            We’re excited to see this through, and we commit to sharing transparently and involving the community as we run this experiment with you. If you want to get involved or have ideas to share, join our <Link href="https://t.me/joinchat/OH2KLRjAhvwOjSa1mFYtHQ">telegram</Link> or reach out to the core team directly.
          </Typography>
        </Box>



        <Box p={2} className={classes.callout}>
          <Typography variant="body1" display="inline">
          If this experiment is successful, you win, we win, future founders win, and we all have a new platform to experiment with future Fair Launch dynamics. <span className={classes.strong}>Let’s make it happen, together</span>.
          </Typography>
        </Box>




      </Box>
    </Container>
  )
}
