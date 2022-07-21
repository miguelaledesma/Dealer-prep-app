import Head from 'next/head'
import Image from 'next/image'
import { Card, Grid, Text, Button, Row, Divider } from "@nextui-org/react";



export default function Recommendation() {
  return (
    <div>
      <Head>
        <title>Recommendations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <h1 style ={{ marginTop: '1rem', marginLeft: '0rem'}}>Personal Recommendations</h1>

      <Grid.Container gap={1}>
      <Grid sm={12} md={5}>
        <Card >
          <Card.Header>
            <Text b>A Mom and Pop Business </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
            Vercel is easy to use and with a template from a website and guides available on Vercel, a small business can launch their website with a few clicks! 

            </Text>
            <Text style = {{marginTop: '1rem'}}>
              Once you select a template, an Engineering manager can make changes to the website and will be updated within a few minutes. The integration with github will
              always update the newest changes made to the site. 
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card >
          <Card.Header>
            <Text b>Marketing Page for Nintendo</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              If your company is looking for quick turnaround to create a beautiful marketing landing page, Vercels templates are perfect for bringing this to life. 

            </Text>

            <Text style = {{marginTop: '1rem'}}>
            Vercels templates are ready to deploy immediately with the latest version dependencies. Your frontend team can have a amazing marketing page done within a few hours. 
            There is a large number of templates to pick from and the majority of the templates are compatible with UI Libraries. This will facilitate the development process for your engineers and allow your page to quickly reach the market!  
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
    <h5 style ={{ marginTop: '1rem', marginLeft: '1rem'}}> ** I am not too experienced in how a service like Vercel will benefit the NFT space ** </h5>
    </div>
  )
}