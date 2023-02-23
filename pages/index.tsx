import type { GetServerSideProps } from "next"

/** Add your relevant code here for the issue to reproduce */
export default function Home(props: any) {
  return (
    <>
      <p>{props.ip}</p>
      <p>{process.env.NEXT_PUBLIC_API_URL_1}</p>
      <p>{process.env.NEXT_PUBLIC_API_URL_2}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.API_URL_1)
  console.log(process.env.NEXT_PUBLIC_API_URL_1)
  console.log(process.env.API_URL_2)
  console.log(process.env.NEXT_PUBLIC_API_URL_2)

  let resp;

  try{
    resp = await fetch(process.env.API_URL_1, {headers: {
      "Accept": "application/json"
    }})
  } catch (e) {
    console.log("Could not find server-side env var, trying with client-side...")
    resp = await fetch(process.env.API_URL_2, {headers: {
      "Accept": "application/json"
    }})
  }

  return {
    props: {
      ip: (await resp.json()).ip
    }
  }
} 
